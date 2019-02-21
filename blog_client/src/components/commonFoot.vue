<template>
    <div class="indexwrap commonfoot">
        <div class="mainwrap mainfoot">
            <div class="introduce">
                <img src="./../static/images/common/logo.png" alt="机智僧">
            </div>
            <div class="friendship">
                友情链接:
                <br><br>
                <a href="http://www.zhoujizhi.com" target="_blank">机智僧技术分享网</a>
            </div>
        </div>
        <div class="mainwrap copyright">
            <div class="copyrighttext">
                机智网已经连续修炼了{{day}}天{{hour}}小时{{minute}}分{{second}}秒<span class="my-face">(●'◡'●)ﾉ♥</span>
                <br><br>
                粤ICP备18158752号 . All Rights Reserved. ©Copyright 2018 by
                <a href="http://www.zhoujizhi.com">
                    &nbsp;周机智
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            day:"",
            hour:"",
            minute:"",
            second:"",
            starttime:new Date("2018/10/01 15:30:00"),
        }
    },
    components:{

    },
    mounted:function (){
        var that = this;
        var times1 = new Date().getTime()-that.starttime.getTime();
        var day = parseInt(times1/1000/60/60/24);
        this.day = day;
        var hour = parseInt((times1-day*24*60*60*1000)/1000/60/60);
        var minute = parseInt((times1-day*24*60*60*1000-hour*60*60*1000)/1000/60);
        var second = parseInt((times1-day*24*60*60*1000-hour*60*60*1000-minute*60*1000)/1000);
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        var time = setInterval(function (){
            var times = new Date().getTime()-that.starttime.getTime();
            var hour = parseInt((times-day*24*60*60*1000)/1000/60/60);
            var minute = parseInt((times-day*24*60*60*1000-hour*60*60*1000)/1000/60);
            var second = parseInt((times-day*24*60*60*1000-hour*60*60*1000-minute*60*1000)/1000);
            that.hour = hour;
            that.minute = minute;
            that.second = second;
        },1000);
    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
    .my-face {
        display: inline-block;
        animation: my-face 1.5s ease-in-out 0s infinite normal none running;
        margin: 0px 5px;
    }
    @keyframes my-face{
        10% {
        transform: translateY(-1.5px) rotate(0.5deg);
        }
        20% {
        transform: translateY(1.5px) rotate(1.5deg);
        }
        30% {
            transform: translateY(-1.5px) rotate(-0.5deg);
        }
        40% {
            transform: translateY(1.5px) rotate(-1.5deg);
        }
        50% {
            transform: translateY(-1.5px) rotate(-1.5deg);
        }

        60% {
        transform: translateY(1.5px) rotate(1.5deg);
        }
        70% {
            transform: translateY(-2.5px) rotate(-0.5deg);
        }
        80% {
            transform: translateY(0.5px) rotate(-1.5deg);
        }
        90% {
            transform: translateY(-2.5px) rotate(-1.5deg);
        }
    }

</style>
