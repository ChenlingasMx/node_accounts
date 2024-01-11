// 导入lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
// 获取 db 对象
const db = low(adapter);

// 初始化
// db.defaults({ posts: [], user: {} }).write()

// 添加
// db.get('posts').push({ id: 1, title: 'lowdb is awesome'}).write()

// 获取数据
// db.get('posts').find({ id: 1}).value()

// 删除
// db.get('posts').remove({id:1}).write()

// 更新
// db.get("posts").find({ id: 1 }).assign({ title: "今天下午啦" }).write();
