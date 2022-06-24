<template>
  <div class="login">
    <div class="fs24 mobile" v-if="index == 1">
      <el-button class="setting" icon="el-icon-setting" circle @click="dialogFormVisible = true"></el-button>
      <el-form ref="form" :model="options" label-width="100px" :rules="rules">
        <el-form-item label="roomName:" prop="channel">
          <el-input v-model="options.channel" placeholder="roomName" suffix-icon="el-icon-s-home"></el-input>
        </el-form-item>
        <!-- <el-form-item label="name:" prop="name">
          <el-input v-model="options.uid" placeholder="name" suffix-icon="el-icon-s-home"></el-input>
        </el-form-item> -->
        <el-form-item label="Role Select:">
          <el-radio-group v-model="options.role">
            <el-radio label="host">Broadcast</el-radio>
            <el-radio label="audience">Audience</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="AEC:">
          <el-radio-group v-model="options.AEC">
            <el-radio :label="true">open</el-radio>
            <el-radio :label="false">close</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="AGC:">
          <el-radio-group v-model="options.AGC">
            <el-radio :label="true">open</el-radio>
            <el-radio :label="false">close</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="ANS:">
          <el-radio-group v-model="options.ANS">
            <el-radio :label="true">open</el-radio>
            <el-radio :label="false">close</el-radio>
          </el-radio-group>
        </el-form-item>
        <div>
          <el-button type="primary" @click="onSubmit" style="width:80%">JOIN</el-button>
        </div>
      </el-form>
    </div>
    <div class="fs24 mobile1" v-if="index == 2">
      <div class=content v-if="options.role=='audience'">
        <div v-for="(item,index) in hostList" :key="index">
          <div class="item" v-if="index==0">
            <div class="first"><el-avatar :src="allData[item].src"></el-avatar></div>
            <div><span>uid:{{item}}</span><span>(self,Audience)</span></div>
          </div>
          <div class="itemContent"  v-if="index<5&&index>0">
            <div class="top">
              <div class="first"><el-avatar :src="allData[item].src" ></el-avatar></div>
              <div><span>uid:{{item}}</span></div>
            </div>
            <div class="bottom">
              <p ref="textContent" v-html="allData[item].stringBuilder"></p>
            </div>
          </div>
        </div>
      </div>
      <div class=content v-if="options.role=='host'">
        <div v-for="(item,index) in hostList" :key="index">
          <div class="itemContent"  v-if="index<4">
            <div class="top">
              <div class="first"><el-avatar :src="allData[item].src" ></el-avatar></div>
              <div><span>uid:{{item}}</span><span v-if="index==0">(self,Broadcast)</span></div>
            </div>
            <div class="bottom">
              <p ref="textContent" v-html="allData[item].stringBuilder"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonList">
        <el-button v-if="start" @click="startFanl" size="mini" type="primary" plain :loading="loading" >start STT</el-button>
        <el-button v-else @click="stopFanl" type="success" size="mini" :loading="loading" >stop STT</el-button>
        <el-button size="mini" type="primary" plain @click="back">leave channel</el-button>
        <el-button size="mini" type="primary" plain  @click="fanl" v-if="start">load transcription</el-button>
        <el-button size="mini" type="primary" plain  @click="noFanl" v-if="start">load close caption</el-button>
        <el-button size="mini" type="primary" plain  @click="simpleText">text</el-button>
        <el-button size="mini" type="primary" plain @click="queryFanl" :disabled="!taskId">query status</el-button>
      </div>
    </div>
    <el-drawer
      title="load transcription"
      :visible.sync="drawerFanl">
      <div class="drawerContent" v-if="outputStreamFanle.length">
        <el-button size="mini" type="primary" @click="clearFanl">clear cache</el-button>
        <p v-for="(item,index) in outputStreamFanle.split('</br>')" :key="index" v-html="item"></p>
      </div>
      <div class="drawerContent" v-else>
        <p>empty</p>
      </div>
    </el-drawer>
    <el-drawer
      title="load close caption"
      :visible.sync="drawer">
      <div class="drawerContent" v-if="outputStreamFanle.length">
        <el-button size="mini" type="primary" @click="clear">clear cache</el-button>
        <p v-for="(item,index) in outputStreamNoFanle.split('</br>')" :key="index" v-html="item"></p>
      </div>
      <div class="drawerContent" v-else>
        <p>empty</p>
      </div>
    </el-drawer>
    <el-drawer
      title="text"
      :visible.sync="drawerFanlSimple">
      <div class="drawerContent">
        <p>{{this.simpletext}}</p>
      </div>
    </el-drawer>
    <el-dialog title="setting" :visible.sync="dialogFormVisible" width="400px" :close-on-click-modal="false"	>
      <p>appId:<el-input v-model="appId" placeholder="appId" suffix-icon="el-icon-setting" style="width:300px"></el-input></p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import AgoraRTC from "agora-rtc-sdk-ng";
import protoRoot from "@/proto/proto.js";
import axios from 'axios'
const VUE_APP_ID = process.env.VUE_APP_ID;
export default {
  data(){
    return{
      rtc:{
        localAudioTrack: null,
        client: null
      },
      hostList:[],
      token:null,
      uid:null,
      appId:VUE_APP_ID,
      start:true,
      loading:false,
      taskId:'',
      index:1,
      tokenName:'',
      options:{
        channel:'',
        // uid:'',
        role:'host',
        AEC:false,
        AGC:false,
        ANS:false
      },
      pollingWorker:'',
      rules:{
        channel:[{ required: true, message: 'roomName is required', trigger: 'blur' },]
      },
      allData:{},
      lastSeqnum : -1,
      finalLists:{},
      nonFinalList:{},
      outputStreamFanle:'',
      outputStreamNoFanle:'',
      createTs:'',
      drawer: false,
      drawerFanl: false,
      drawerFanlSimple:false,
      simpletext:'',
      dialogFormVisible:false
    } 
  },
  created(){
    
  },
  mounted(){
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  beforeDestroy(){
    if(this.rtc.localAudioTrack){
      this.leaveRoom();
    }
    if(this.taskId && this.tokenName){
      this.stopFanl()
    }
    // window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  methods: {
    clearFanl(){
      this.$confirm('Are you sure to clear fanle', 'tip', {
        confirmButtonText: 'sure',
        cancelButtonText: 'cancle',
        type: 'warning'
      }).then(() => {
        this.outputStreamFanle = ''
        localStorage.setItem('outputStreamFanle','')
        this.$message({
          type: 'success',
          message: 'success!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'cancle'
        });          
      });
      
    },
    clear(){
      this.$confirm('Are you sure to clear no-Fanle', 'tip', {
        confirmButtonText: 'sure',
        cancelButtonText: 'cancle',
        type: 'warning'
      }).then(() => {
        this.outputStreamNoFanle = ''
        localStorage.setItem('outputStreamNoFanle','')
        this.$message({
          type: 'success',
          message: 'success!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'cancle'
        });          
      });
    },
    fanl(){
      this.drawerFanl = true;
    },
    simpleText(){
      this.drawerFanlSimple = true;
    },
    noFanl(){
      this.drawer = true;
    },
    isOAverdue() {
      return !this.tokenName || ((Date.now()/1000 - this.createTs) >= 60*5);
      // return false
    },
    onSubmit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.index = 2;
          this.outputStreamFanle = localStorage.getItem("outputStreamFanle")?localStorage.getItem("outputStreamFanle"):''
          this.outputStreamNoFanle = localStorage.getItem("outputStreamNoFanle")?localStorage.getItem("outputStreamNoFanle"):''
          this.start = true;
          this.tokenName = '';
          this.startBasicCall()
        } else {
          return false;
        }
      });
    },
    back(){
      this.index = 1;
      this.hostList=[];
      this.uid = '';
      this.beforeunloadHandler()
      this.outputStreamNoFanle = ''
      this.outputStreamFanle = ''
    },
    async startBasicCall() {
      // AgoraRTC.setLogLevel(4)
      this.rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8",role:this.options.role });
      this.rtc.client.on("user-published", async (user, mediaType) => {
        let res = await this.rtc.client.subscribe(user, mediaType);
        // console.log("subscribe success",res._userId);
        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play();
        }
        this.rtc.client.on("user-unpublished", async (user) => {
          await this.rtc.client.unsubscribe(user);
        });
      });
      this.rtc.client.on("user-joined",(user)=>{
        if(![1000,2000].includes(user.uid)){
          this.hostList.push(user.uid)
          this.allData[user.uid] = {
            src:require('../../img/avatar' + user.uid.toString().slice(-1) + '.png')
          }
          // this.$forceUpdate()
        }
      }) 
      this.rtc.client.on("user-left",(user, reason) => {
        // console.log(user.uid)
        if(this.allData[user.uid]){
          delete this.allData[user.uid]
          this.hostList.splice(this.hostList.indexOf(user.uid),1)
          // this.$forceUpdate()
        }
      })
      this.rtc.client.on("stream-message", (uid, payload) => {
        // console.log(uid)
        this.uint8Array(uid,payload)
      })
      this.joinRoom()
    },
    async joinRoom(){
      const uid = await this.rtc.client.join(this.appId, this.options.channel, this.token, this.uid);
      this.uid = uid;
      this.hostList.push(uid)
      this.allData[uid]={
        src:require('../../img/avatar' + uid.toString().slice(-1) + '.png')
      }
      console.log(this.options)
      this.rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack({
        AEC:this.options.AEC,
        AGC:this.options.AGC,
        ANS:this.options.ANS,
      });
      if(this.options.role == 'host'){
        await this.rtc.client.publish([this.rtc.localAudioTrack]);
        // console.log("publish success!");
      }
      // this.getBuilderTokens()
    },
    async leaveRoom(){
      this.rtc.localAudioTrack.close();
      await this.rtc.client.leave();
      // console.log("leave success!");
    },
    async getBuilderTokens(callBack){
      axios.post(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/builderTokens`,{instanceId:this.options.channel}).then((res)=>{
        if(res.status == 200){
          this.tokenName = res.data.tokenName;
          this.createTs =  res.data.createTs;
          if(callBack == 1){
            this.startFanl()
          }
        }else{
          this.$message.error('网络异常')
        }
      }).catch(error => {
        this.$message.error(error.response.data.message?error.response.data.message:'网络异常')
      })
    },
    async startFanl(){
      this.loading = true;
      this.simpletext=''
      if(!this.isOAverdue()){
        axios.post(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/tasks?builderToken=${this.tokenName}`,{
          "audio": {
            "subscribeSource": "AGORARTC",
            "agoraRtcConfig": {
              "channelName": this.options.channel,
              "uid": '1000',
              "token": '', // 可选
              "channelType": 'LIVE_TYPE',
              "subscribeConfig": {
                "subscribeMode": "CHANNEL_MODE"
              },
              "maxIdleTime": 60
            }
          },
          "config": {
            "features": [
              "RECOGNIZE"
            ],
            "recognizeConfig": {
              "language": "ENG",
              "model": "Model",
              "connectionTimeout": 60,
              "output": {
                "destinations": [
                  "AgoraRTCDataStream"
                ],
                "agoraRTCDataStream": {
                  "channelName": this.options.channel,
                  "uid": '2000',
                  "token": '' // 可选
                }
              }
            }
          }
        }).then((res)=>{
          if(res.status == 200){
            this.start = false;
            this.loading = false;
            this.taskId = res.data.taskId;
            console.log(new Date())
            this.createWorker(() => {
              if(this.taskId){
                console.log(new Date())
                this.stopFanl()
              }
            }, 600000)
          }else{
            this.loading = false;
            this.$message.error('网络异常')
          }
        }).catch(error => {
          this.loading = false;
          this.start = true;
          this.$message.error(error.response.data.message?error.response.data.message:'网络异常')
        })
      }else{
        this.getBuilderTokens(1)
      }
      
    },
    async stopFanl(){
      let that = this;
      this.loading = true;
      let res = await fetch(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/tasks/${this.taskId}?builderToken=${this.tokenName}`, {
        method: 'delete',
        keepalive:true,
        headers:{
          'content-type': 'application/json'
        }
      })
      let data = await res.text();
      let datas = JSON.parse(data);
        if(!datas.message){
          that.start = true;
          that.loading = false;
          that.taskId = ''
          that.tokenName = ''
          that.stopWorker(that.pollingWorker)
        }else{
          that.loading = false;
          that.$message.error(datas.message?datas.message:'网络异常')
        }
    },
    async queryFanl(){
      if(!this.taskId){
        return this.$message.error('当前没有任务');
      }
        let that = this;
        fetch(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/tasks/${this.taskId}?builderToken=${this.tokenName}`, {
          method: 'get',
          headers:{
            'content-type': 'application/json'
          }
        }).then(function (data) {
          return data.text();
        }).then(function (data) {
          let datas = JSON.parse(data);
          if(datas.status){
            that.$message.success(`当前任务状态${datas.status}`);
          }else{
            that.$message.error(datas.message?datas.message:'网络异常')
          }
        })
    },
    uint8Array(uid,uint8Array) {
      let textstream = protoRoot.lookup("Text").decode(uint8Array);
      let words = textstream.words;
      // console.log(textstream)
      if(textstream.seqnum === this.lastseqnum){
        return;
      }else{
        this.lastSeqnum = textstream.seqnum;
      }
      if((this.hostList.indexOf(textstream.uid)>=4 && this.options.role == 'host') || (this.hostList.indexOf(textstream.uid)>=5 && this.options.role == 'audience') ){
        return
      }
      if(!this.finalLists[textstream.uid]){
        this.finalLists[textstream.uid]=[]
      }
      if(!this.nonFinalList[textstream.uid]){
        this.nonFinalList[textstream.uid]=[]
      }
      let nonFinalList=[];
      let text1='';
      let text2='';
      words.forEach(item=>{
        if(item.isFinal){
          this.finalLists[textstream.uid].push(item.text)
          if(this.isSentenceBoundaryWord(item.text)){
            this.finalLists[textstream.uid]=[];
          }
          text1 += "<span class='red'>"+textstream.uid + '</span> ' + "<span class='blue'>"+item.text + '</span> '  + "<span class='yellow'>("+item.confidence.toFixed(2)+')</span> ';
          if(this.simpletext.length>0&&!this.isPunctuationWord(item.text)){
            this.simpletext+=' ';
          }
          this.simpletext+=item.text;
        }else{
          text2 += "<span class='red'>"+textstream.uid + '</span> ' + "<span class='blue'>"+item.text + '</span> '  + "<span class='yellow'>("+item.confidence.toFixed(2)+')</span> ';
          nonFinalList.push(item.text)
        }
      })
      if(text1.length){
        this.outputStreamFanle += new Date().toLocaleString() + ' ' + text1 + '</br>';
      }
      if(text2.length){
        this.outputStreamNoFanle += new Date().toLocaleString() + ' ' + text2 + '</br>';
      }
      let stringBuilder = '';
      this.finalLists[textstream.uid].forEach(item=>{
        if(stringBuilder.length > 0 && !this.isPunctuationWord(item)){
          stringBuilder+=' '
        }
        stringBuilder += item
        if(this.isSentenceBoundaryWord(item)){
          stringBuilder += '</br>'
        }
      })
      nonFinalList.forEach(item=>{
        if(stringBuilder.length > 0 && !this.isPunctuationWord(item)){
          stringBuilder+=' '
        }
        stringBuilder += item
        if(this.isSentenceBoundaryWord(item)){
          stringBuilder += '</br>'
        }
      })
      // console.log(nonFinalList)
      // console.log(this.outputStreamNoFanle)
      // console.log(this.outputStreamFanle)
      // console.log(stringBuilder)
      if(this.allData[textstream.uid]){
        this.allData[textstream.uid].stringBuilder = stringBuilder;
      }
      this.$forceUpdate()
    },
    // Determines if a word returned from the service is punctuation.
    isPunctuationWord(word) {
      return word == "." || word == "?" || word==",";
    },
    // Determines if a word returned from the service is a sentence boundary.
    isSentenceBoundaryWord(word) {
      return word == "." || word == "?";
    },
    //  Builds text for a list of words (texts) as returned from the service.
    wordsToText(words){
      let builder = '';
      words.forEach(item=>{
        if(builder.length > 0 && !this.isPunctuationWord(item)){
          builder+=' '
        }
        builder += item
      })
      return builder
    },
    beforeunloadHandler(e) {
      if(this.taskId && this.tokenName){
        this.stopFanl()
      }
      if(this.rtc.localAudioTrack){
        this.leaveRoom();
      }
      localStorage.setItem("outputStreamNoFanle",this.outputStreamNoFanle)
      localStorage.setItem("outputStreamFanle",this.outputStreamFanle)
      // console.log('关闭窗口之后')
      var confirmationMessage = "你确定要离开我吗？";
      (e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
      return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
    },
    create(f) {
      var blob = new Blob(['(' + f +')()']);
      var url = window.URL.createObjectURL(blob);
      var worker = new Worker(url);
      return worker;
    }, 
    createWorker (callback, time){
      this.pollingWorker = this.create(`function (e) {
          setInterval(function () {
              this.postMessage(null)
          }, ${time})
      }`);
      this.pollingWorker.onmessage = callback 
    },
    stopWorker (vm){
      try {
          vm&&vm.terminate()
      } catch (err) {
          console.log(err)
      }
    }
  }
}
</script>
<style lang="scss">
.mobile{
  width: 375px;
  height: 667px;
  margin: 0 auto;
  box-shadow: 1px 0px 10px 0px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background:url('../../img/logo.png') 140px 50px no-repeat;
  border-radius: 10px;
  position: relative;
  .setting{
    position:absolute;
    top: 20px;
    right: 20px;
  }
}
.mobile1{
  width: 375px;
  height: 667px;
  overflow: auto;
  overflow-x: hidden;
  margin: 0 auto;
  box-shadow: 1px 0px 10px 0px;
  background:url('../../img/logo.png') 140px 50px no-repeat;
  .content{
    padding-top: 100px;
    .item{
      padding: 10px;
      display: flex;
      flex-flow:row nowrap;
      align-items: center;
      justify-content: flex-start;
      border-bottom:1px solid #9999993d;
      .first{
        margin-right: 20px;
      }
    }
    .itemContent{
      padding: 10px;
      border-bottom:1px solid #9999993d;
      .top{
        display: flex;
        flex-flow:row nowrap;
        align-items: center;
        justify-content: flex-start;
        .first{
          margin-right: 20px;
        }
      }
      .bottom{
        font-size: 16px;
        height:100px;
        width: 355px;
        line-height: 25px;
        word-wrap: break-word;
        text-align: left;
        position: relative;
        overflow: hidden;
        transition: all .3;
        p{
          position: absolute;
          bottom: -16px;
          min-height: 100px;
        }
      }
    }
  }
}
.buttonList{
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: 210px;
  width: 140px;
  height: 300px;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  justify-content: flex-start;
  .el-button{
    width: 120px;
    margin-bottom: 10px;
    margin-left: 0;
  }
}
.drawerContent{
  text-align: left;
  padding-left: 20px;
  font-size: 12px;
  line-height: 20px;
}
.red{
  color: red;
}
.yellow{
  color: green;
}
.blue{
  color: blue;
}
</style>
