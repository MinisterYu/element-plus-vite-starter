<script lang="ts" setup name="BaseSide">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<style scoped>

</style>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="#">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>工具列表</span>
      </template>
      
      <el-menu-item-group>
        <template #title>
          <span>常用工具</span>
        </template>
        <el-menu-item index="/nav/tools">
          console
        </el-menu-item>

        <el-menu-item index="/nav/tools/stress">
          stress test
        </el-menu-item>
        
      </el-menu-item-group>


      <el-menu-item-group title="Data list">
        <el-menu-item index="data">
          data map
        </el-menu-item>
      </el-menu-item-group>


      <el-sub-menu index="users">
        <template #title>
          <span>users</span>
        </template>
        <el-menu-item index="users/setting">
          setting
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>


    <el-menu-item index="/nav/2">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        Navigator Two
      </template>
    </el-menu-item>

    <el-menu-item index="3" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item>

    <el-menu-item index="/nav/4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        Navigator Four
      </template>
    </el-menu-item>
  </el-menu>
</template>
