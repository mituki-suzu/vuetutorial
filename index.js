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

// 直接ではなくても代入できる
app.message = "I have a chenge message!"
app2.message = 'some new message'
// v-ifはtrue,falseで表示非表示を切り替えられる
app3.seen = false
