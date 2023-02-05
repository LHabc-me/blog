<template>
    <div id="back" @click="onClicked" :style="{backgroundImage:url}">
        <slot>
            <div id="text">
                <h1>点击测试手速</h1>
                <div>背景变化时再次快速点击</div>
            </div>
        </slot>
    </div>
</template>

<script>

import {ElMessage} from 'element-plus'

export default {
    data() {
        return {
            url: null,
            state: 'ready',
            startTime: null,
            timer: null
        }
    },
    methods: {
        onClicked() {
            if (this.state === 'ready') {
                //开始测试
                this.state = 'toBeStarted';
                this.timer = setTimeout(() => {
                    this.startTime = Date.now();
                    this.state = 'started';
                    this.showImage();
                }, Math.random() * 2500 + 500);

            } else if (this.state === 'toBeStarted') {
                //提前点击
                this.showError();
                this.restart();
            } else if (this.state === 'started') {
                //测试结束
                let interval = (Date.now() - this.startTime) / 1000;
                this.showResult(interval);
                this.restart();
            }
        },
        showImage() {
            const num = Math.floor(Math.random() * (729 - 1) + 1);
            this.url = `url('${require(`public/pokemon/${num}.jpg`)}')`;
        },
        showBlank() {
            this.url = null;
        },
        restart() {
            clearTimeout(this.timer);
            this.state = 'ready';
            this.showBlank();
        },
        showResult(interval) {
            ElMessage({
                message: `耗时${interval}秒`,
                type: 'success',
            });
        },
        showError() {
            ElMessage.error("点快了！")
        }
    }
}
</script>

<style scoped>
#back {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    width: 100%;
}

#text {
    padding: 10% 0 0 0;
    text-align: center;
    width: 100%;
    height: 100%;
}
</style>