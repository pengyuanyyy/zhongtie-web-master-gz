<script setup lang='ts'>

</script>

<template>
    <div class="right">
        <img src="@/assets/images/img/header-right-bg.png" alt="">
        <div class="mode">
            <img src="@/assets/images/img/header-right-mode-bg.png" alt="">
            <p class="text1 jiuss_Number">16</p>
            <p class="text2 jiuss_Number">17</p>
            <p class="text3 jiuss_Number">18</p>
        </div>
    </div>
</template>

<style scoped lang="less">
    img {
        width: 100%;
        vertical-align: bottom;
        display: block;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
    }
    header .right .mode {
    position: absolute;
    width: 130px;
    top: 27px;
    left: 70px;
    }

        
    header .right .mode p {
        position: absolute;
        color: #ffffff;
        font-size: 12px;
    }

    header .right .mode p.text1 {
        left: 18px;
        top: 20px;
        font-family: 'jiuss number'
    }

    header .right .mode p.text2 {
        right: 25px;
        top: 20px;
    }

    header .right .mode p.text3 {
        left: 30px;
        bottom: -5px;
    }

    .jiuss_Number {
    font-family: 'jiuss number';
    font-size: 18px !important;
    letter-spacing: .4em;
    }
</style>