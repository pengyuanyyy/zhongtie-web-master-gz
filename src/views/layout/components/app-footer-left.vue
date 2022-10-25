<script setup lang='ts'>

</script>

<template>
    <div class="statistics">
        <img src="@/assets/images/img/statistics-bg.png" alt="">
        <div class="info">
            <h5 class="flex flex-align-center">工程统计区<i class="el-icon-caret-bottom"></i></h5>
            <ul class="flex">
                <li class="flex flex-align-center flex-justify-center">工程项目数</li>
                <li class="flex flex-align-center flex-justify-center">发运累计</li>
                <li class="flex flex-align-center flex-justify-center">构件生产累计</li>
                <li class="flex flex-align-center flex-justify-center">统计累计</li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>

footer .statistics {
    width: 500px;
    position: relative;
    flex: 0 0 430px;
}


footer .statistics .info {
    position: absolute;
    top: 110px;
    left: 140px;
    width: 170px;
}



footer .statistics .info h5 {
    color: #36a2ff;
    font-weight: normal;
    font-size: 16px;
}

footer .statistics .info ul {
    flex-wrap: wrap;
    justify-content: space-between;
}

footer .statistics .info ul li {
    width: 80px;
    height: 20px;
    background-color: #6191c2;
    border-radius: 3px;
    color: #ffffff;
    font-size: 12px;
    margin-top: 8px;
}

</style>