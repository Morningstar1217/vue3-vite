# vite+vue3初次尝试

在公司一直用的是vue2来搭建项目，虽然用了很久了，但是从头开始搭建项目却一直没有真正意义上的尝试过，vue3出来也很长一段时间了，这段时间正好不是太忙，于是今天开始尝试着搭建vite+vue3的项目，结果刚开始就遇到了困难，在这里把遇到的一些困难一一记录下来，希望自己以后能多注意。

### 使用vite初始化项目

使用npm初始化

```
npm init @vitejs/app
```

初始化项目并没有什么需要注意的地方，只用自己添加一个名称即可。

### vite.config.js配置

初始化项目时会自动生成一个vite.config.js文件，已经引入了部分文件。

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()]
})
```

我们要做的，只是在这个上面进行相应的添加，比如：**别名**。

我们首先需要在vite.config.js中引入path，并定义一个resolve的方法，在plugins同级下对路径进行别名的操作。

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const resolveFun = (dir) => {
    return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolveFun('src'),
        },
    },
})
```

### vue-router引入

首先先将vue-router进行安装。

```
npm i vue-router@next -S   
```

在src文件夹下新建router文件夹，新建index.js文件

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
// hash模式  createWebHashHistory
// history模式  createWebHistory
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('@/pages') },
    ],
})

export default router
```

最后在main.js文件中引入

```javascript
import router from './router'

createApp(App).use(router).mount('#app')
```

### 整合sass

使用npm安装sass

```
npm i sass -D
```

### 引入element plus

使用npm安装element plus

```
npm i element-plus  -S 
```

在main.js中整体引入或是在src新建一个plugins文件夹进行组件的引入

这里我们使用的是新建一个plugins文件夹进行引入

```javascript
// 新建elementPlus.js文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default (app) => {
    app.use(ElementPlus)
}
```

接着在main.js中引入

```javascript
import ElementPlus from '@/plugins/elementPlus'

createApp(App).use(router).use(ElementPlus).mount('#app')
```

### vue3 深度选择器

在vue3中，>>>和/deep/写法被废弃，使用时会导致页面报错

正确的使用方式:

```scss
:deep(类名) {}
::v-deep{}
```

### 组件中emit传值

网上虽然搜出了很多的答案，但是还是有点不太清楚，于是自己尝试了都用了用，发现这个方法算是比较友好且易懂的：

```javascript
import { defineComponent } from 'vue'

export default defineComponent({
    props: {//props传值},  
        emits: ['changeMenu'],//定义emit的方法名  
        setup: (props, context) => {
            const methods = {
                //子组件事件名      
                changeMenu: (val) => {
                    context.emit('changeMenu', val)//传值到父组件     
                },
            }
            return { ...methods }
        },
    }
})
```

### 组件中使用props的值

当我们需要在组件中使用props的值时，例如点击时获取，可以这样写

```javascript
import { defineComponent } from 'vue'

export default defineComponent({
    //必须要提前声名props的类型，不然在setup中获取不到  
    props: {
        isCollapse: {
            default: () => false,
            type: Boolean,
        },
        defaultAvatar: {
            default: () => '',
            type: String,
        },
    },
    emits: ['changeCollapse'],
    setup(props, context) {
        const methods = {
            changeCollapse: () => {
                context.emit('changeCollapse', !props.isCollapse)//获取到了props的传值      
            },
        }
        return { ...methods }
    },
})
```

