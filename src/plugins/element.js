
import Vue from "vue";
// 在下面的大括号中按需导入所需 Element-UI 中的组件即可
import { Button, Form, FormItem, Input, Message,Radio,RadioGroup, Drawer,Avatar,MessageBox,Dialog} from "element-ui";
// 注意：导入的组件都需要使用 Vue.use() 进行注册
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Drawer);
Vue.use(Avatar);
Vue.use(Dialog);
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm;