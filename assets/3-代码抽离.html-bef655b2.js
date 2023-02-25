const n=JSON.parse(`{"key":"v-2a9c5c78","path":"/Vue3ElementPlus%E7%AC%94%E8%AE%B0/3-%E4%BB%A3%E7%A0%81%E6%8A%BD%E7%A6%BB.html","title":"3-代码抽离","lang":"en-US","frontmatter":{"icon":"edit","date":"2023-02-23T00:00:00.000Z","category":["Vue3"],"tag":["Vue3","Element-Plus"],"star":true,"sticky":true,"toc":false},"headers":[{"level":3,"title":"1. 抽离登录界面表单","slug":"_1-抽离登录界面表单","link":"#_1-抽离登录界面表单","children":[]},{"level":3,"title":"2. 抽离登陆数据验证","slug":"_2-抽离登陆数据验证","link":"#_2-抽离登陆数据验证","children":[]},{"level":3,"title":"3. 组件以及验证ts的引入","slug":"_3-组件以及验证ts的引入","link":"#_3-组件以及验证ts的引入","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"Vue3ElementPlus笔记/3-代码抽离.md","localizedDate":"February 23, 2023","excerpt":"<h1> 3-代码抽离</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>基于第二步编辑的代码</p>\\n<p>文件结构如图：</p>\\n<p>\\n</p>\\n</div>\\n<h3> 1. 抽离登录界面表单</h3>\\n<h5> 1. 在 <strong>components</strong> 文件夹内创建 <strong>LoginForm.vue</strong> 文件，并将登陆表单抽离到此处</h5>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token comment\\">&lt;!-- 组件化 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form</span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>loginForm<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>loginUser<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:rules</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>rules<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>loginForm sign-in-form<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>titletext<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>登录Demo<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span> <span class=\\"token attr-name\\">prop</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>email<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-input</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>loginUser.email<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>请输入账号<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span> <span class=\\"token attr-name\\">prop</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>password<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>password<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>loginUser.password<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>请输入密码<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-button</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>primary<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>handleLogin('loginForm')<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>submit-btn<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>登陆<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n         <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>register-btn<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">&gt;</span></span>立即注册<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>ts<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref<span class=\\"token punctuation\\">,</span> getCurrentInstance <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n\\n<span class=\\"token comment\\">//  setup 中使用 defineProps 来获取父组件传递的值</span>\\n<span class=\\"token keyword\\">const</span> props <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineProps</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">loginUser</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> Object<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">required</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">rules</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> Object<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">required</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// @ts-ignore</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> ctx <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getCurrentInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">const</span> handleLogin <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>formName<span class=\\"token operator\\">:</span> String<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token parameter\\"><span class=\\"token keyword\\">void</span></span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    ctx<span class=\\"token punctuation\\">.</span>$refs<span class=\\"token punctuation\\">[</span>formName<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">validate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">valid</span><span class=\\"token operator\\">:</span> boolean</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>valid<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">alert</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'submit!'</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'error submit!'</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>less<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n\\n<span class=\\"token selector\\">.loginForm</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">position</span><span class=\\"token punctuation\\">:</span> relative<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">top</span><span class=\\"token punctuation\\">:</span> 10px<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">.titletext</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">text-align</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> #409EFF<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">font-size</span><span class=\\"token punctuation\\">:</span> 24px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span> -20px 0 20px 0<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">.submit-btn</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 100%\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">.register-btn</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">text-align</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">font-size</span><span class=\\"token punctuation\\">:</span> 0.5rem<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> cornflowerblue<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">cursor</span><span class=\\"token punctuation\\">:</span> pointer<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
