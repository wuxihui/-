import Mock from "mockjs"
let str = Mock.mock("http://localhost:8080/api/list.json",{
  "code": 0,
  "msg": function () {
    return this.code === 0 ? 'ok' : '错了'
  },
  "data": [
    { "name": "@name",
      "id|+1": 1
     }
  ]
})



//不需要暴露东西出来