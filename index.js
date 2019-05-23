var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// v-bindでtitleを指定することによりホバーで四角いポップアップが出る
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// v-forで要素をリストで表現できる
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

// v-onでイベントリスナ
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// v-modelで双方向バインディング
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
  
var app7 = new Vue({
    el: '#app-7',
    data: {
    groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
    }
})

var obj = {
    foo: 'bar'
}
// freezeすることで変更を起こさせない
Object.freeze(obj)
var app8 = new Vue({
    el: '#app8',
    data: obj
})

Vue.component('todo-item',{
    template:'\
    <li>\
    {{title}}\
    <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
    ',
    props:['title']
})

var app9 = new Vue({
    el:'#todo-list-example',
    data:{
        newTodoText:' ',
        todos:[
            {
                id:　1,
                title: 'Training',
            }
        ],
        newTodoId:2
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

var app10 = new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})

Vue.component('blog-post2', {
    props: ['post'],
    template: `
    <div class="blog-post2">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
    </div>
    `
})


var app11 = new Vue({
    el: '#blog-post-demo2',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})

// 直接ではなくても代入できる
app.message = "I have a chenge message!"
app2.message = 'some new message'
// v-ifはtrue,falseで表示非表示を切り替えられる
app3.seen = false
// pushで要素の追加
app4.todos.push({ text: 'New item' })


