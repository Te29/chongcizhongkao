<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <div v-if="fatherComponent == 'home'" >
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style" ></router-link>
    </div>
    <div v-if="fatherComponent == 'item'" >
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
          <p class="item_description">{{itemDetail[itemNum-1].description}}</p>
          <ul>
            <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" :key="item.topic_answer_id" @click="choosed(index, item.topic_answer_id)" class="item_list">
              <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
      <span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
name: 'itemcontainer',
data() {
  return {
    itemId: null, //题目ID
    choosedNum: null, //选中答案索引
    choosedId:null //选中答案id
  }
},
  props:['fatherComponent'],
  computed: mapState([
    'itemNum', //第几题
    'level', //第几周
    'itemDetail', //题目详情
    'timer', //计时器
]),
  methods: {
    ...mapActions([
      'addNum', 'initializeData',
    ]),
    //点击下一题
    nextItem(){
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId)
      }else{
        alert('您还没有选择答案哦')
      }
    },
    //索引0-3对应答案A-B
    chooseType: type => {
      switch(type){
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    //选中的答案信息
    choosed(type,id){
      this.choosedNum = type;
      this.choosedId = id;
    },
    //到达最后一题，交卷，请空定时器，跳转分数页面
    submitAnswer(){
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        clearInterval(this.timer)
        this.$router.push('score')
      }else{
        alert('您还没有选择答案哦')
      }
    },
},
created(){
  //初始化信息
  if(this.fatherComponent == 'home') {
    this.initializeData();
    //document.body.style.backgroundImage = 'url(/1-1.jpg)';
  }
}
}
</script>

<style lang="less">
.top_tips{
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip{
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}	
.home_logo{
  background-image: url(../images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.item_back{
  background-image: url(../images/2-1.png);
  background-size: 100% 100%;
}
.button_style{
      display: block;
      height: 2.1rem;
      width: 4.35rem;
      background-size: 100% 100%;
      position: absolute;
      top: 16rem;
      left: 50%;
      margin-left: -2.4rem;
      background-repeat: no-repeat;
}
.start{
  background-image: url(../images/1-4.png);
  }
  .next_item{
    background-image: url(../images/2-2.png);
  }
  .submit_item{
    background-image: url(../images/3-1.png);
  }
  .item_list_container{
    position: absolute;
    height: 7.0rem;
    width: 12.0rem;
    top: 1.3rem;
    left: 3rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
  -webkit-font-smoothing: antialiased;
  }
.item_title{
  font-size: 0.8rem;
  color: #000;
  line-height: 1.2rem;
}
.item_list{
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span{
    display: inline-block;
    font-size: 0.9rem;
    color: #000;
    vertical-align: middle;
  }
  .option_style{
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.4rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    font-size: 0.7rem;
    font-family: 'Arial';
  }
  .has_choosed{
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail{
    width: 7.5rem;
    padding-top: 0rem;
  }
}
@media screen and (min-width: 1024px) {
  .top_tips{
  position: absolute;
  height: 3.5rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip{
    position: absolute;
    left: 0.48rem;
    bottom: 0.8rem;
    height: 0.2rem;
    width: 2.5rem;
    font-size: 0.4rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 0.4rem;
  left: 0.1rem;
}	
.home_logo{
  background-image: url(../images/1-2.png);
  background-size: 8rem 60%;
  left: 2rem;
  top: -1.5rem;
}
.item_back{
  background-image: url(../images/2-1.png);
  background-size: 60% 60%;
}
.button_style{
      display: block;
      height: 2.1rem;
      width: 4.35rem;
      background-size: 70% 70%;
      position: absolute;
      top: 7.8rem;
      left: 60%;
      margin-left: -2.4rem;
      background-repeat: no-repeat;
}
.start{
  background-image: url(../images/1-4.png);
  }
  .next_item{
    background-image: url(../images/2-2.png);
  }
  .submit_item{
    background-image: url(../images/3-1.png);
  }
  .item_list_container{
    position: absolute;
    height: 5.0rem;
    width: 10.0rem;
    top: 1.2rem;
    left: 3.5rem;
    padding-left: 1rem;
  -webkit-font-smoothing: antialiased;
  }
.item_title{
  font-size: 0.5rem;
  color: #000;
  line-height: 1.2rem;
}
.item_description {
    font-size: 0.5rem; 
    color: #333; 
    margin-bottom: 0.5rem; 
  }
.item_list{
  font-size: 0;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  width: 10rem;
  span{
    display: inline-block;
    font-size: 0.5rem;
    color: #000;
    vertical-align: middle;
  }
  .option_style{
    height: 0.5rem;
    width: 0.5rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.5rem;
    text-align: center;
    margin-right: 0.4rem;
    font-size: 0.4rem;
    font-family: 'Arial';
  }
  .has_choosed{
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail{
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
}
</style>