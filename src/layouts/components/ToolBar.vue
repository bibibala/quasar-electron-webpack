<template>
    <q-toolbar style="height: 60px" class="full-width">
        <div class="box">
            <img src="~src/assets/logo.png" style="height: 43px" />
            <div class="text">demo</div>
        </div>
        <q-space></q-space>
        <q-avatar size="md" class="q-mr-xs">
            <q-img
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%20width%3D%2250%22%20height%3D%2250%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EDylan!%20The%20Avatar%20Generator%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3ENatalia%20Spivak%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1356575240759683500%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9EDylan!%20The%20Avatar%20Generator%E2%80%9D%20(https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1356575240759683500)%20by%20%E2%80%9ENatalia%20Spivak%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC%20BY%204.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23619eff%22%20width%3D%2280%22%20height%3D%2280%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cpath%20d%3D%22M19.07%2030.47s1.57-20.23%2021.59-20.23S62.3%2030.55%2062.3%2030.55s9.43-.8%209.43%207.6c0%208.42-9.28%207.13-9.28%207.13S60.9%2067.15%2042.03%2067.15c-21.11%200-23.4-20.8-23.4-20.8s-9%20.72-9.93-6.25c-1.08-8.2%2010.37-9.64%2010.37-9.64%22%20fill%3D%22%23ffd6c0%22%2F%3E%3Cpath%20d%3D%22m64.3%2039.49.46-.41.1-.09c.12-.1-.13.1-.02.02l.24-.17q.5-.35%201.06-.62l.26-.12.05-.02.05-.02.58-.21q.6-.18%201.2-.28c.52-.08.85-.76.7-1.23-.18-.56-.67-.8-1.23-.7a9.3%209.3%200%200%200-4.87%202.43c-.38.36-.4%201.06%200%201.4.4.36%201%20.4%201.4%200zm-51.8-1.16.14.01c-.27-.02-.11-.01-.04%200l.3.05.52.14.28.09.12.05c.02%200%20.22.09.06.02-.14-.1%200-.04.03-.03l.15.06.26.13.47.3.27.22q.47.38.83.83c.33.4%201.07.37%201.41%200%20.4-.43.36-.98%200-1.4a7.3%207.3%200%200%200-4.84-2.53c-.52-.06-1.02.5-1%201%20.03.59.44.94%201%201m18.3-1.9v4.54c0%20.52.46%201.02%201%201s1-.44%201-1V36.4c0-.52-.46-1.02-1-1s-1%20.44-1%201M49.2%2036l-.15%204.81a1%201%200%200%200%201%201c.56-.02.98-.44%201-1l.15-4.8a1%201%200%200%200-1-1%201%201%200%200%200-1%201%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M27.86%2043.79c2.41%209.29%2015.16%2012.28%2022.34%206.67a14%2014%200%200%200%204.7-7.22c.36-1.24-1.57-1.77-1.93-.53-1.24%204.23-4.33%207.39-8.68%208.33-3.77.8-8.03-.1-11.05-2.52a10%2010%200%200%201-3.45-5.26c-.34-1.25-2.27-.72-1.95.53%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M19.07%2030.47s1.63%206%202.49%205.81c2.1-.36%204.15-17.25%204.15-17.25l30.03-.32s1.64%2017.06%203.18%2017.06%203.37-5.22%203.37-5.22%201.22-19.9-.27-21.9C59.7%205.58%2020.28%205.12%2019%209.9s.06%2020.58.06%2020.58z%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                width="50"
            ></q-img>
        </q-avatar>
        <q-btn-dropdown
            flat
            color="dark"
            class="text-bold"
            :label="'用户0000001'"
            style="font-size: 15px"
        >
            <q-list>
                <q-item
                    v-for="item in tabList"
                    :key="item.id"
                    clickable
                    v-close-popup
                >
                    <q-item-section>{{ item.name }}</q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </q-toolbar>
</template>
<script setup>
const tabList = [{ name: "退出登录", id: 0 }];

// function eventChange(mode: number) {
//     switch (mode) {
//         case 0:
//             logout();
//             break;
//     }
// }
</script>
<style scoped lang="scss">
.box {
    height: 60px;
    display: flex;
    justify-content: start;
}

.box img {
    display: block;
    margin: auto 0 auto 10px;
}

.box .text {
    color: $dark;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    margin-left: 10px;
}
</style>
