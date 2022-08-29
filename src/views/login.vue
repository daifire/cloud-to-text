<template>
  <div class="login">
    <div class="fs24 mobile" v-if="index == 1">
      <el-button class="setting" icon="el-icon-setting" circle @click="dialogFormVisible = true"></el-button>
      <el-form ref="form" :model="options" label-width="110px" :rules="rules" style="margin-top: -7rem;">
        <el-form-item label="User Name:" prop="userName">
          <el-input v-model="options.userName" placeholder="Enter Your Name"
            @input="(val) => (options.userName = options.userName.toUpperCase())"></el-input>
        </el-form-item>
        <el-form-item label="Room Name:" prop="channel">
          <el-input v-model="options.channel" placeholder="Enter Room Name" suffix-icon="el-icon-s-home"
            @input="(val) => (options.channel = options.channel.toUpperCase())"></el-input>
        </el-form-item>
        <el-form-item label="Join As:">
          <el-radio-group v-model="options.role">
            <el-radio label="host" style="margin-left: -1rem;">Host</el-radio>
            <el-radio label="audience" style="margin-left: -1rem;">Audience</el-radio>
          </el-radio-group>
        </el-form-item>
        <div>
          <el-button type="primary" @click="onSubmit" style="width:80%">JOIN</el-button>
        </div>
      </el-form>
    </div>
    <div class="fs24 mobile1" v-if="index == 2 && !isMobile">
      <div class=content v-if="options.role == 'audience'">
        <div>
          <span>Room Name : {{ this.options.channel }}</span>
        </div>
        <div v-for="(item, index) in userList" :key="index">
          <div class="item" v-if="index == 0">
            <div class="first">
              <el-avatar :src="allData[item.uid].src"></el-avatar>
            </div>
            <div>
              <div id="wrapperDiv">
                <div id="div1" style="float:left"><span>User Name: {{ item.name
                }}</span><span> (Self,Audience) </span>
                </div>
              </div>
            </div>
          </div>
          <div class="itemContent" v-if="index < 5 && index > 0">
            <div class="top">
              <div class="first">
                <el-avatar :src="allData[item.uid].src"></el-avatar>
              </div>
              <div id="wrapperDiv">
                <div id="div1" style="float:left"><span>User Name: {{ item.name }}</span>
                </div>
              </div>
            </div>
            <div class="bottom" v-if="allData[item.uid]">
              <p ref="textContent" v-html="allData[item.uid].stringBuilder"></p>
            </div>
          </div>
        </div>
      </div>
      <div class=content v-if="options.role == 'host'">
        <div>
          <span>Room Name : {{ this.options.channel }}</span>
        </div>
        <div v-for="(item, index) in userList" :key="index">
          <div class="itemContent" v-if="index < 3">
            <div class="top">
              <div class="first">
                <el-avatar :src="allData[item.uid].src"></el-avatar>
              </div>
              <div id="wrapperDiv">
                <div id="div1" style="float:left"><span>User Name: {{ item.name }}</span><span v-if="index == 0">
                    (Self,Host)</span>
                </div>
              </div>
            </div>
            <div class="bottom" v-if="allData[item.uid]">
              <p ref="textContent" v-html="allData[item.uid].stringBuilder"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fs24 mobile1 mobile2" v-if="index == 2 && isMobile">
      <div class="topH">
        <div class="header">
          <i class="el-icon-plus" :class="isCollapse ? 'unfold close' : 'unfold'" @click="changeOpen"></i>
          <span slot="label" @click="back" style="font-size: 15px;float: right;margin-right: 20px;"> Leave Room </span>
        </div>
      </div>
      <el-tabs tab-position="left" :class="isCollapse ? 'tabs' : 'tabs tabs-close'" v-model="activeName"
        @tab-click="handleClick">
        <el-tab-pane label="TranscribeLive" name="TranscribeLive" style="height:100%">
          <div class=content v-if="options.role == 'audience'">
            <div>
              <span>Room Name : {{ this.options.channel }}</span>
            </div>
            <div v-for="(item, index) in userList" :key="index">
              <div class="item" v-if="index == 0">
                <div class="first">
                  <el-avatar :src="allData[item.uid].src"></el-avatar>
                </div>
                <div>
                  <div id="wrapperDiv">
                    <div id="div1" style="float:left"><span>User Name: {{ item.name
                    }}</span><span> (Self,Audience) </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="itemContent" v-if="index < 4 && index > 0">
                <div class="top">
                  <div class="first">
                    <el-avatar :src="allData[item.uid].src"></el-avatar>
                  </div>
                  <div id="wrapperDiv">
                    <div id="div1" style="float:left"><span>User Name: {{ item.name }}</span>
                    </div>
                  </div>
                </div>
                <div class="bottom" v-if="allData[item.uid]">
                  <p ref="textContent" v-html="allData[item.uid].stringBuilder"></p>
                </div>
              </div>
            </div>
          </div>
          <div class=content v-if="options.role == 'host'">
            <div>
              <span>Room Name : {{ this.options.channel }}</span>
            </div>
            <div v-for="(item, index) in userList" :key="index">
              <div class="itemContent" v-if="index < 3">
                <div class="top">
                  <div class="first">
                    <el-avatar :src="allData[item.uid].src"></el-avatar>
                  </div>
                  <div id="wrapperDiv">
                    <div id="div1" style="float:left"><span>User Name: {{ item.name }}</span><span v-if="index == 0">
                        (Self,Host)</span>
                    </div>
                  </div>
                </div>
                <div class="bottom" v-if="allData[item.uid]">
                  <p ref="textContent" v-html="allData[item.uid].stringBuilder"></p>
                </div>
              </div>
            </div>
          </div>
          <div style="position: fixed;top: 80vh;left: 50%;margin-left: -24px;width: 200px;text-align: left;">
            <el-button icon="el-icon-microphone" style="width:auto;font-size:30px;" circle v-if="!peerStartedSTT"
              @click="startFanl" size="mini" type="primary" title="Start Transcription" :loading="loading">
            </el-button>
            <el-button icon="el-icon-turn-off-microphone" v-else
              style="width:auto;background:#cb4c38;font-size:30px;border:#cb4c38;" circle @click="stopFanl" size="mini"
              type="primary" title="Stop Transcription" :loading="loading">
            </el-button>
            <span style="font-size:14px;color:#000;margin-left:20px;vertical-align: 5px;" v-if="start"
              >recording...</span>
            <span style="font-size:14px;color:#000;margin-left:20px;vertical-align: 5px;" v-if="!start">click to
              start</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Full Transcription" name="Full Transcription">
          <div class="drawerContent">
            <p>{{ this.simpletext }}</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Conversation" name="Conversation">
          <div class="drawerContent">
            <div v-for='(item, i) in simpletextMetting' :key="i">
              <div v-if="item.text">
                <p>{{ item.name }} {{ new Date(parseInt(item.time)).toLocaleString() }}</p>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="Content Filter" name="Content Filter">
          <div class="drawerContent">
            <p v-html="profanityStr"></p>
          </div>
        </el-tab-pane> -->
      </el-tabs>
    </div>
    <div class="buttonList" v-if="index == 2 && !isMobile">
      <el-button v-if="peerStartedSTT" icon="el-icon-microphone"
        style="width:auto;background:#cb4c38;font-size:30px;border:#cb4c38;" circle @click="stopFanl" size="mini"
        type="primary" title="Stop Transcription" :loading="loading"></el-button>
      <el-button v-else icon="el-icon-turn-off-microphone" style="width:auto;font-size:30px;" circle @click="startFanl"
        size="mini" type="primary" title="Start Transcription" :loading="loading"></el-button>
      <el-button size="mini" v-show="join" type="primary" plain @click="back">Leave Room</el-button>
      <el-button size="mini" v-show="false" type="primary" plain @click="fanl" v-if="start">load transcription
      </el-button>
      <el-button size="mini" v-show="false" type="primary" plain @click="noFanl" v-if="start">load close caption
      </el-button>
      <el-button size="mini" v-show="join" type="primary" plain @click="simpleText">Full Transcription</el-button>
      <el-button size="mini" v-show="join" type="primary" plain @click="simpleTextMeeting">Conversation</el-button>
      <!-- <el-button size="mini" v-show="join" type="primary" plain @click="profanity">Content Filter</el-button> -->
      <el-button size="mini" v-show="false" type="primary" plain @click="queryFanl" :disabled="!taskId">Query status
      </el-button>
    </div>
    <el-drawer title="load transcription" :visible.sync="drawerFanl">
      <div class="drawerContent" v-if="outputStreamFanle.length">
        <el-button size="mini" type="primary" @click="clearFanl">clear cache</el-button>
        <p v-for="(item, index) in outputStreamFanle.split('</br>')" :key="index" v-html="item"></p>
      </div>
      <div class="drawerContent" v-else>
        <p>empty</p>
      </div>
    </el-drawer>
    <el-drawer title="load close caption" :visible.sync="drawer">
      <div class="drawerContent" v-if="outputStreamFanle.length">
        <el-button size="mini" type="primary" @click="clear">clear cache</el-button>
        <p v-for="(item, index) in outputStreamNoFanle.split('</br>')" :key="index" v-html="item"></p>
      </div>
      <div class="drawerContent" v-else>
        <p>empty</p>
      </div>
    </el-drawer>
    <el-drawer title="Full Transcription" :visible.sync="drawerFanlSimple">
      <div class="drawerContent">
        <p>{{ this.simpletext }}</p>
      </div>
    </el-drawer>
    <el-drawer title="Conversation(Content Filter)" :visible.sync="drawerFanlProfanity">
      <div class="drawerContent">
        <p v-html="profanityStr"></p>
      </div>
    </el-drawer>
    <el-drawer title="Conversation" :visible.sync="drawerFanlSimpleMetting">
      <div class="drawerContent">
        <div v-for='(item, i) in simpletextMetting' :key="i">
          <div v-if="item.text">
            <p>{{ item.name }} {{ new Date(parseInt(item.time)).toLocaleString() }}</p>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </el-drawer>
    <el-dialog title="Settings" :visible.sync="dialogFormVisible" width="400px" :close-on-click-modal="false">
      <p style="padding-right: 4px;">APP ID: <el-input v-model="appId" placeholder="appId" style="width:300px;">
        </el-input>
      </p>
      <el-form ref="form" :model="options" label-width="110px" :rules="rules" style="margin-left: -3rem;">
        <el-form-item label="AEC:">
          <el-radio-group v-model="options.AEC" style="margin-left: -8rem;">
            <el-radio :label="true" style="margin-right: -1rem;">Open</el-radio>
            <el-radio :label="false">Close</el-radio>
            <el-tooltip class="item" effect="dark" content="Acoustic Echo Cancellation" placement="top-start">
              <el-button icon="el-icon-info" circle data-coreui-placement="top" class="tooltip"
                style="padding:0% !important,margin-right: -1rem;">
              </el-button>
            </el-tooltip>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="AGC:">
          <el-radio-group v-model="options.AGC" style="margin-left: -8rem;">
            <el-radio :label="true" style="margin-right: -1rem;">Open</el-radio>
            <el-radio :label="false">Close</el-radio>
            <el-tooltip class="item" effect="dark" content="Audio Gain Control" placement="top-start">
              <el-button icon="el-icon-info" circle data-coreui-placement="top" class="tooltip"
                style="padding:0% !important,margin-right: -1rem;">
              </el-button>
            </el-tooltip>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="ANS:">
          <el-radio-group v-model="options.ANS" style="margin-left: -8rem;">
            <el-radio :label="true" style="margin-right: -1rem;">Open</el-radio>
            <el-radio :label="false">Close</el-radio>
            <el-tooltip class="item" effect="dark" content="Automatic Noise Suppression" placement="top-start">
              <el-button icon="el-icon-info" circle data-coreui-placement="top" class="tooltip"
                style="padding:0% !important,margin-right: -1rem;">
              </el-button>
            </el-tooltip>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

import AgoraRTC from "agora-rtc-sdk-ng";
import AgoraRTM from "agora-rtm-sdk";
import protoRoot from "@/proto/proto.js";
import axios from 'axios'
import _ from "lodash";
import { async } from "q";
import { faL } from "@fortawesome/free-solid-svg-icons";

const VUE_APP_ID = process.env.VUE_APP_ID;
export default {
  data() {
    return {
      rtc: {
        localAudioTrack: null,
        client: null,
      },
      userList: [],
      hostList: [],
      token: null,
      uid: null,
      appId: VUE_APP_ID,
      start: true,
      loading: false,
      taskId: '',
      join: false,
      index: 1,
      tokenName: '',
      rtmClient: '',
      peerStartedSTT: false,
      options: {
        channel: '',
        role: 'host',
        userName: '',
        AEC: true,
        AGC: true,
        ANS: true,

      },
      pollingWorker: '',
      rules: {
        channel: [{ required: true, message: 'roomName is required', trigger: 'blur' },],
        userName: [{ required: true, message: 'userName is required', trigger: 'blur' },],
      },
      allData: {},
      lastSeqnum: -1,
      finalLists: {},
      nonFinalList: {},
      outputStreamFanle: '',
      outputStreamNoFanle: '',
      createTs: '',
      drawer: false,
      drawerFanl: false,
      drawerFanlSimple: false,
      simpletext: '',
      dialogFormVisible: false,
      drawerFanlSimpleMetting: false,
      simpletextMetting: [],
      rtmChannel: '',
      // str: '',
      profanityStr: '',
      drawerFanlProfanity: false,
      isCollapse: false,
      isMobile: false,
      activeName: 'TranscribeLive',
      // customerKey:'916536139f094d2d90a440b074e79e17',
      // customerSecret:'98a1f6e8c18b4f818df2cfb99db40c47',
      authorizationField: 'Basic OTE2NTM2MTM5ZjA5NGQyZDkwYTQ0MGIwNzRlNzllMTc6OThhMWY2ZThjMThiNGY4MThkZjJjZmI5OWRiNDBjNDc=',
    }
  },
  created() {
    console.log('version 4')
    if (window.screen.width < 500) {
      this.isMobile = true
    }
  },
  mounted() {
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },

  beforeDestroy() {
    if (this.rtc.localAudioTrack) {
      this.leaveRoom();
    }
    if (this.taskId && this.tokenName) {
      this.stopFanl()
    }
    // window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  methods: {
    changeOpen() {
      this.isCollapse = !this.isCollapse;
    },
    handleClick() {
      this.isCollapse = false;
    },
    clearFanl() {
      this.$confirm('Are you sure to clear fanle', 'tip', {
        confirmButtonText: 'sure',
        cancelButtonText: 'cancle',
        type: 'warning'
      }).then(() => {
        this.outputStreamFanle = ''
        localStorage.setItem('outputStreamFanle', '')
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
    clear() {
      this.$confirm('Are you sure to clear no-Fanle', 'tip', {
        confirmButtonText: 'sure',
        cancelButtonText: 'cancle',
        type: 'warning'
      }).then(() => {
        this.outputStreamNoFanle = ''
        localStorage.setItem('outputStreamNoFanle', '')
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
    fanl() {
      this.drawerFanl = true;
    },
    simpleText() {
      this.drawerFanlSimple = true;
    },
    simpleTextMeeting() {
      this.drawerFanlSimpleMetting = true;
      // let str = [];
      // let simpletextMettingArr = this.simpletextMetting.split('</br>');
      // simpletextMettingArr.forEach((item, index) => {
      //   if (item) {
      //     let itemarry = item.split('</>');
      //     str.push({
      //       name: itemarry[0],
      //       uid: itemarry[1],
      //       time: itemarry[2],
      //       text: itemarry[3]
      //     })
      //   }
      // })
      // for (let i = 0; i < str.length; i++) {
      //   for (let j = 0; j < i; j++) {
      //     if (str[i].uid == str[j].uid && str[i].time - str[j].time < 60000 && str[j].text) {
      //       console.log(str[i].text)
      //       str[j].text = str[j].text += str[i].text;
      //       str[i].text = '';
      //     }
      //   }
      // }
      // this.str = str;
    },
    profanity() {
      this.drawerFanlProfanity = true;
    },
    noFanl() {
      this.drawer = true;
    },
    isOAverdue() {
      return !this.tokenName || ((Date.now() / 1000 - this.createTs) >= 60 * 5);
    },
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.index = 2;
          this.outputStreamFanle = localStorage.getItem("outputStreamFanle") ? localStorage.getItem("outputStreamFanle") : ''
          this.outputStreamNoFanle = localStorage.getItem("outputStreamNoFanle") ? localStorage.getItem("outputStreamNoFanle") : ''
          this.start = false;
          this.tokenName = '';
          this.activeName = 'TranscribeLive'
          this.startBasicCall()
        } else {
          return false;
        }
      });
    },
    back() {
      if(this.loading){
        return 
      }
      this.loading = false;
      this.start = false;
      this.hostList = [];
      this.userList = [];
      this.beforeunloadHandler()
      this.outputStreamNoFanle = ''
      this.outputStreamFanle = ''

    },
    // async rtmMemberJoined(channel) {
    //   const remoteUserInfo = await this.rtmClient.getChannelAttributes(channel);
    //   const userListArray = JSON.parse(JSON.stringify(this.userList));

    //   const remoteUserInfoArray = Object.keys(remoteUserInfo).map(key => {
    //     return {
    //       uid: key,
    //       name: remoteUserInfo[key]
    //     }
    //   });

    //   const usersToBeAdded = remoteUserInfoArray.filter(remoteUserInfo => {
    //     return !userListArray.some(userList => userList.uid == remoteUserInfo.uid);
    //   });

    //   usersToBeAdded.forEach(item => {
    //     this.userList.push({ uid: item.uid, name: item.name.value, online: false });
    //     this.allData[item.uid] = {
    //       src: require('../../img/avatar' + item.uid.toString().slice(-1) + '.png'),
    //       name: item.name.value
    //     }
    //   })
    // },
    async rtmMemberLeft() {
      if (this.uid && this.options.channel) {
        await this.rtmClient.deleteChannelAttributesByKeys(this.options.channel, [this.uid.toString()]);
      }
    },
    async rtmMessageFromPeer(message, peerId) {
      if (message.text === "STT started") {
        this.peerStartedSTT = true;
        this.start = true;
      }
      else {
        this.peerStartedSTT = false;
        this.start = false;
        if(this.tokenName){
          this.stopFanl()
        }
      }
    },
    rtmMemberJoined(isSttStarted){
        this.sendStartSTTNotificationToPeers(isSttStarted);
    },
    async startBasicCall() {
      AgoraRTC.setLogLevel(4)
      this.rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8", role: this.options.role });
      this.rtmClient = AgoraRTM.createInstance(this.appId, {
        enableLogUpload: false
      });

      const rtmOptions = {};
      rtmOptions.uid = this.options.userName;
      rtmOptions.token = null;

      await this.rtmClient.login(rtmOptions).then(() => {
        console.log("RTM join success");
        this.join =true;
      }).catch(error => {
        console.log("RTM join failed");
      })

      this.rtmClient.on('MessageFromPeer', async (text, peerId) => this.rtmMessageFromPeer(text, peerId));

      const rtmChannel = await this.rtmClient.createChannel(this.options.channel);
      this.rtmChannel = rtmChannel;
      await this.rtmChannel.join().then(() => {
        console.log("RTM channel join success");
      }).catch(error => {
        console.log("channel RTM failed")
      });

      rtmChannel.on('MemberJoined', ()=> this.rtmMemberJoined(this.start));
      let str = new Date().getTime().toString().substring(4);
      this.uid = Number(str);
      let userName = this.options.userName;
      let userId = this.uid.toString();
      window.userInfo = {};
      userInfo[userId] = userName;
      await this.rtmClient.addOrUpdateChannelAttributes(this.rtmChannel.channelId, userInfo);
      this.rtc.client.on("user-published", async (user, mediaType) => {
        let res = await this.rtc.client.subscribe(user, mediaType);
        let userId = user.uid.toString();
        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play();
        }
        this.rtc.client.on("user-unpublished", async (user) => {
          await this.rtc.client.unsubscribe(user);
        });
      });
      this.rtc.client.on("user-joined", async (user) => {
        if (![1000, 2000].includes(user.uid)) {
          this.hostList.push(user.uid);
          const channelAttributes = await this.rtmClient.getChannelAttributes(this.options.channel);
          console.log('user join ' + user.uid)
          // const userListArray = JSON.parse(JSON.stringify(this.userList));
          // const remoteUserInfoArray = Object.keys(channelAttributes).map(key => {
          //   return {
          //     uid: key,
          //     name: channelAttributes[key]
          //   }
          // });
          // console.log(remoteUserInfoArray)
          // const usersToBeAdded = remoteUserInfoArray.filter(remoteUserInfo => {
          //   return !userListArray.some(userList => userList.uid == remoteUserInfo.uid);
          // });
          // console.log(usersToBeAdded)
          // if (usersToBeAdded !== undefined && usersToBeAdded) {
          //   usersToBeAdded.forEach(item => {
          //     this.userList.push({ uid: item.uid, name: item.name.value, online: false });
          //     this.allData[item.uid] = {
          //       src: require('../../img/avatar' + item.uid.toString().slice(-1) + '.png'),
          //       name: item.name.value
          //     }
          //   })
          // }
          if (channelAttributes[user.uid]) {
            this.userList.push({ uid: user.uid, name: channelAttributes[user.uid].value, online: false })
            this.allData[user.uid] = {
              src: require('../../img/avatar' + user.uid.toString().slice(-1) + '.png'),
              name: channelAttributes[user.uid].value
            }
          }
        }
      })
      this.rtc.client.on("user-left", async (user, reason) => {
        console.log('user left ' + user.uid)
        if (this.allData[user.uid]) {
          delete this.allData[user.uid];
          this.userList.splice(this.hostList.indexOf(user.uid), 1);
          this.hostList.splice(this.hostList.indexOf(user.uid), 1);
        }
      })
      this.rtc.client.on("stream-message", async (uid, payload) => {
        this.uint8Array(payload)
      })
      await this.joinRoom(rtmChannel)
    },
    async joinRoom(rtmChannel) {
      const uid = await this.rtc.client.join(this.appId, this.options.channel, this.token, this.uid);
      console.log('self uid ' + uid)
      this.hostList.unshift(uid)
      const userName = this.options.userName;
      const userId = uid.toString();

      // window.userInfo = {};
      // userInfo[userId] = userName;

      // await this.rtmClient.addOrUpdateChannelAttributes(rtmChannel.channelId, userInfo);

      this.userList.unshift({ uid: userId, name: userName, online: false });

      this.allData[userId] = {
        src: require('../../img/avatar' + userId.toString().slice(-1) + '.png'),
        name: userName
      };

      this.rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack({
        AEC: this.options.AEC,
        AGC: this.options.AGC,
        ANS: this.options.ANS,
      });
      if (this.options.role == 'host') {
        await this.rtc.client.publish([this.rtc.localAudioTrack]);
      }
    },
    async leaveRoom() {
      this.start = false;
      this.join = false;
      this.rtc.localAudioTrack.close();
      await this.rtmMemberLeft()
      await this.rtc.client.leave();
      await this.rtmChannel.leave();
      await this.rtmClient.logout();
      this.uid = '';
    },
    async getBuilderTokens(callBack) {
      axios.post(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/builderTokens`, { instanceId: this.options.channel }, { headers: { 'Authorization': this.authorizationField } }).then((res) => {
        if (res.status == 200) {
          this.tokenName = res.data.tokenName;
          this.createTs = res.data.createTs;
          if (callBack == 1) {
            this.startFanl()
          }
        } else {
          this.$message.error('网络异常')
        }
      }).catch(error => {
        this.$message.error(error.response.data.message ? error.response.data.message : '网络异常')
      })
    },

    async sendStartSTTNotificationToPeers(hasStarted) {

      this.peerStartedSTT = hasStarted;

      this.rtmChannel.getMembers().then((memberNames) => {
        console.log("members in the channel are" + memberNames);
        memberNames.forEach(async (member)=> {
          if (this.options.userName != member) {
            await this.rtmClient.sendMessageToPeer({
              text: hasStarted ? "STT started" : "STT stopped"
            },
              member,
            ).then(
              console.log("message has been sent")
            ).catch((error) => {
              console.log("error while sending message", error);
            });
          }
        })
      })
    },
    async startFanl() {
      this.loading = true;
      this.simpletext = '';

      if (this.options.role == 'host') {
        await this.rtc.client.publish([this.rtc.localAudioTrack]);
      }
      if (!this.isOAverdue()) {
        axios.post(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/tasks?builderToken=${this.tokenName}`, {
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
        }, { headers: { 'Authorization': this.authorizationField } }).then((res) => {
          if (res.status == 200) {
            this.start = true;
            this.loading = false;
            this.taskId = res.data.taskId;
            this.sendStartSTTNotificationToPeers(true);
            this.createWorker(() => {
              if (this.taskId) {
                console.log(new Date())
                this.stopFanl()
              }
            }, 600000)
          } else {
            this.loading = false;
            this.start = false;
            this.$message.error('network anomaly')
          }
        }).catch(error => {
          this.loading = false;
          this.start = false;
          this.$message.error(error.response.data.message ? error.response.data.message : 'network anomaly')
        })
      } else {
        this.getBuilderTokens(1)
      }
    },
    async stopFanl() {
      let that = this;
      this.loading = true;
      this.peerStartedSTT = false;
      await this.sendStartSTTNotificationToPeers(false);
      if(this.tokenName){
        let res = await fetch(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/tasks/${this.taskId}?builderToken=${this.tokenName}`, {
          method: 'delete',
          keepalive: true,
          headers: {
            'content-type': 'application/json',
            'Authorization': this.authorizationField,
          }
        })

        let data = await res.text();
        let datas = JSON.parse(data);

        if (!datas.message) {
          that.start = false;
          that.loading = false;
          that.taskId = ''
          that.tokenName = ''
          that.stopWorker(that.pollingWorker);
        } else {
          that.loading = false;
          that.start = false;
          that.$message.error(datas.message ? datas.message : 'network anomaly')
        }
      }else{
        this.loading = false
      }
    },
    async queryFanl() {
      if (!this.taskId) {
        return this.$message.error('There are currently no tasks');
      }
      let that = this;
      fetch(`/api/v1/projects/${VUE_APP_ID}/rtsc/speech-to-text/tasks/${this.taskId}?builderToken=${this.tokenName}`, {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'Authorization': this.authorizationField,
        }
      }).then(function (data) {
        return data.text();
      }).then(function (data) {
        let datas = JSON.parse(data);
        if (datas.status) {
          that.$message.success(`current task status${datas.status}`);
        } else {
          that.$message.error(datas.message ? datas.message : 'network anomaly')
        }
      })
    },
    uint8Array(uint8Array) {
      let textstream = protoRoot.lookup("Text").decode(uint8Array);
      let words = textstream.words;
      console.log(words)
      if (textstream.seqnum === this.lastseqnum) {
        return;
      } else {
        this.lastSeqnum = textstream.seqnum;
      }
      if ((this.hostList.indexOf(textstream.uid) >= 3 && this.options.role == 'host') || (this.hostList.indexOf(textstream.uid) >= 4 && this.options.role == 'audience')) {
        return
      }
      if (!this.finalLists[textstream.uid]) {
        this.finalLists[textstream.uid] = []
      }
      if (!this.nonFinalList[textstream.uid]) {
        this.nonFinalList[textstream.uid] = []
      }
      let nonFinalList = [];
      let text1 = '';
      let text2 = '';
      let text3 = '';
      let text4 = '';//fanityWord
      words.forEach((item) => {
        if (this.isProfanityWord(item.text)) {
          if (item.isFinal) {
            text4 += item.text.split(':')[0].split('[')[1] + ' -> ' + item.text.split(':')[1].split(']')[0] + " ; ";
          }
          item.text = item.text.split(':')[0].split('[')[1];
        }
        if (item.isFinal) {
          this.finalLists[textstream.uid].push(item.text)
          if (this.isSentenceBoundaryWord(item.text)) {
            this.finalLists[textstream.uid] = [];
          }
          text1 += "<span class='red'>" + textstream.uid + '</span> ' + "<span class='blue'>" + item.text + '</span> ' + "<span class='yellow'>(" + item.confidence.toFixed(2) + ')</span> ';

          if (this.simpletext.length > 0 && !this.isPunctuationWord(item.text)) {
            this.simpletext += ' ';
            text3 += ' ';
          }
          text3 += item.text;
          this.simpletext += item.text;
        } else {
          text2 += "<span class='red'>" + textstream.uid + '</span> ' + "<span class='blue'>" + item.text + '</span> ' + "<span class='yellow'>(" + item.confidence.toFixed(2) + ')</span> ';
          nonFinalList.push(item.text)
        }
      })
      if (text1.length) {
        this.outputStreamFanle += new Date(parseInt(textstream.time)).toLocaleString() + ' ' + text1 + '</br>';
      }
      if (text2.length) {
        this.outputStreamNoFanle += new Date(parseInt(textstream.time)).toLocaleString() + ' ' + text2 + '</br>';
      }
      if (text3.length) {
        let flag = false;
        // this.simpletextMetting += this.allData[textstream.uid].name + '</>' + textstream.uid + '</>' + textstream.time + '</>' + text3 + '</br>';
        this.simpletextMetting.forEach((item) => {
          if (item.uid == textstream.uid && textstream.time - item.time < 60000) {
            item.text += text3;
            flag = true;
          }
        })
        if (!flag && this.allData[textstream.uid]) {
          this.simpletextMetting.push({
            name: this.allData[textstream.uid].name,
            uid: textstream.uid,
            time: textstream.time,
            text: text3
          })
        }
      }
      if (text4.length) {
        this.profanityStr += this.allData[textstream.uid].name + ' ' + textstream.uid + ' ' + new Date(parseInt(textstream.time)).toLocaleString() + '</br>' + text4 + '</br>';
      }
      let stringBuilder = '';
      this.finalLists[textstream.uid].forEach(item => {
        if (stringBuilder.length > 0 && !this.isPunctuationWord(item)) {
          stringBuilder += ' '
        }
        stringBuilder += item
        // if (this.isSentenceBoundaryWord(item)) {
        //   stringBuilder += '</br>'
        // }
      })

      nonFinalList.forEach(item => {
        if (stringBuilder.length > 0 && !this.isPunctuationWord(item)) {
          stringBuilder += ' '
        }
        stringBuilder += item
        // }
      })
      if (stringBuilder[0] && this.isPunctuationWord(stringBuilder[0])) {
        stringBuilder = stringBuilder.slice(1)
      }
      if (this.allData[textstream.uid]) {
        this.allData[textstream.uid].stringBuilder = stringBuilder;
        // console.log(this.allData[textstream.uid].name, stringBuilder)
      }
      this.$forceUpdate()
    },
    // Determines if a word returned from the service is punctuation.
    isPunctuationWord(word) {
      return word == "." || word == "?" || word == ",";
    },
    // Determines if a word returned from the service is a sentence boundary.
    isSentenceBoundaryWord(word) {
      return word == "." || word == "?";
    },
    //is profanity 
    isProfanityWord(word) {
      return word.includes('[')
    },
    //  Builds text for a list of words (texts) as returned from the service.
    wordsToText(words) {
      let builder = '';
      words.forEach(item => {
        if (builder.length > 0 && !this.isPunctuationWord(item)) {
          builder += ' '
        }
        builder += item
      })
      return builder
    },
    async beforeunloadHandler(e) {
      if (this.taskId && this.tokenName) {
        await this.stopFanl();
      }
      if (this.rtc.localAudioTrack) {
        await this.leaveRoom();
      }
      this.index = 1;
      localStorage.setItem("outputStreamNoFanle", this.outputStreamNoFanle)
      localStorage.setItem("outputStreamFanle", this.outputStreamFanle)

      var confirmationMessage = "Are you sure you want to leave?";
      (e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
      return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
    },
    create(f) {
      var blob = new Blob(['(' + f + ')()']);
      var url = window.URL.createObjectURL(blob);
      var worker = new Worker(url);
      return worker;
    },
    createWorker(callback, time) {
      this.pollingWorker = this.create(`function (e) {
          setInterval(function () {
              this.postMessage(null)
          }, ${time})
      }`);
      this.pollingWorker.onmessage = callback
    },
    stopWorker(vm) {
      try {
        vm && vm.terminate()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss">
@import url("//unpkg.com/element-ui@2.15.8/lib/theme-chalk/index.css");

.tooltip {
  padding: 0% !important
}

.mobile {
  width: 100%;
  max-width: 375px;
  height: 790px;
  margin: 20px auto;
  box-shadow: 1px 0px 10px 0px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: url('../../img/logo.png') 140px 50px no-repeat;
  border-radius: 10px;
  position: relative;

  .setting {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.mobile1 {
  width: 375px;
  height: 790px;
  overflow: auto;
  overflow-x: hidden;
  margin: 20px auto;
  box-shadow: 1px 0px 10px 0px;
  background: url('../../img/logo.png') 140px 50px no-repeat;
  position: relative;

  .content {
    padding-top: 100px;

    .item {
      padding: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #9999993d;

      .first {
        margin-right: 20px;
      }
    }

    .itemContent {
      padding: 10px;
      border-bottom: 1px solid #9999993d;

      .top {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;

        .first {
          margin-right: 20px;
        }
      }

      .bottom {
        font-size: 16px;
        height: 100px;
        width: 355px;
        line-height: 25px;
        word-wrap: break-word;
        text-align: left;
        position: relative;
        overflow: hidden;
        transition: all .3;

        p {
          position: absolute;
          bottom: -16px;
          min-height: 100px;
        }
      }
    }
  }
}

.buttonList {
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: 210px;
  width: 140px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;

  .el-button {
    width: 120px;
    margin-bottom: 10px;
    margin-left: 0;
  }

  .buttonBox {
    width: 120px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
  }
}

.drawerContent {
  text-align: left;
  padding-left: 20px;
  font-size: 12px;
  line-height: 20px;
}

.red {
  color: red;
}

.yellow {
  color: green;
}

.blue {
  color: blue;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  height: 100%;
}

.el-menu-vertical-demo {
  height: 100%;
  // width: 0;
}

.mobile2 {
  width: 100%;
  height: 100vh;
  margin: 0;
  background: #fff;

  .content {
    padding-top: 20px;
    width: 90vw;
    -webkit-overflow-scrolling: touch;
  }

  .drawerContent {
    width: 90vw;
    padding: 5px;
  }

  .topH {
    padding-top: 0;
    position: relative;

    .header {
      height: 50px;
      font-size: 30px;
      background: url('../../img/logo.png') 140px 5px no-repeat;
      line-height: 50px;
      color: #359dfd;
      border-bottom: 1px solid #e4e7ed;
    }

  }

  .unfold {
    border: 0 none;
    position: absolute;
    left: 40px;
    top: 10px;
    transition: all .3s;
  }

  .close {
    transform: rotate(135deg);
    transform-origin: 50% 50%;
  }

  .tabs {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    transition: all .3s;

    .el-tabs__header {
      width: 120px;
    }

    .el-tabs__content {
      height: 100%;
      overflow: scroll;
    }

    .el-tabs__item {
      padding: 0 10px;
    }
  }

  .tabs-close {
    left: -121px;
  }
}
</style>
