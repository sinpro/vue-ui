const routes=[
    {
        "path": "/home",
        "name": "Home主页",
        "icon": "md-home",
        "component":{"name": "Home",}
    },
    {
        "path": "/index",
        "name": "首页",
        "icon": "md-outlet",
        "redirect": "/index/Index1",
        "component":{},
        "hidden": false,
        "children": [
        {
            "path": "index1",
            "name": "首页1",
            "icon": "ios-funnel",
            "redirect": "/index/index1/Index1_1",
            "component":{},
            "hidden": false,
            "children": [
            {
                "path": "index1_1",
                "name": "首页1-1",
                "icon": "ios-aperture",
                "component":
                {
                    "name": "Index1_1",
                },
                "hidden": false
            },
            {
                "path": "index1_2",
                "name": "首页1-2",
                "icon": "md-appstore",
                "component":
                {
                    "name": "Index1_2",
                },
                "hidden": false
            },
            {
                "path": "index1_3",
                "name": "首页1-3",
                "icon": "ios-at",
                "component":
                {
                    "name": "Index1_3",
                },
                "hidden": false
            }]
        },
        {
            "path": "index2",
            "name": "首页2",
            "icon": "ios-bookmark",
            "component":
            {
                "name": "Index2",
            },
            "hidden": false
        },
        {
            "path": "index3",
            "name": "首页3",
            "icon": "ios-funnel",
            "redirect": "/index/index1/Index3_1",
            "component":
            {},
            "children": [
            {
                "path": "index3_1",
                "name": "首页3-1",
                "icon": "ios-aperture",
                "component":
                {
                    "name": "Index3_1",
                },
                "hidden": false
            },
            {
                "path": "index3_2",
                "name": "首页3-2",
                "icon": "md-appstore",
                "component":
                {
                    "name": "Index3_1",
                },
                "hidden": false
            }]
        }]
    },
    {
        "path": "/list",
        "name": "列表页",
        "icon": "ios-cloud",
        "redirect": "/list/List1",
        "component":
        {},
        "children": [
        {
            "path": "list1",
            "name": "列表页1",
            "icon": "ios-albums",
            "redirect": "/list/list1/List1_1",
            "component":
            {},
            "children": [
            {
                "path": "list1_1",
                "name": "列表页1-1",
                "icon": "ios-aperture",
                "component":
                {
                    "name": "List1_1",
                    "staticRenderFns": [],
                    "_scopeId": "data-v-c59256b6",
                    "beforeCreate": [null, null],
                    "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\list1\\List1_1.vue",
                    "beforeDestroy": [null]
                },
                "hidden": false
            },
            {
                "path": "list1_2",
                "name": "列表页1-2",
                "icon": "ios-aperture",
                "component":
                {
                    "name": "List1_2",
                    "staticRenderFns": [],
                    "_scopeId": "data-v-c57627b4",
                    "beforeCreate": [null, null],
                    "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\list1\\List1_2.vue",
                    "beforeDestroy": [null]
                },
                "hidden": false
            },
            {
                "path": "list1_3",
                "name": "列表页1-3",
                "icon": "ios-aperture",
                "component":
                {
                    "name": "List1_3",
                    "staticRenderFns": [],
                    "_scopeId": "data-v-c559f8b2",
                    "beforeCreate": [null, null],
                    "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\list1\\List1_3.vue",
                    "beforeDestroy": [null]
                },
                "hidden": false
            },
            {
                "path": "list1_4",
                "name": "列表页1-4",
                "icon": "ios-aperture",
                "component":
                {
                    "name": "List1_4",
                    "staticRenderFns": [],
                    "_scopeId": "data-v-c53dc9b0",
                    "beforeCreate": [null, null],
                    "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\list1\\List1_4.vue",
                    "beforeDestroy": [null]
                },
                "hidden": false
            }]
        },
        {
            "path": "list2",
            "name": "列表页2",
            "icon": "md-map",
            "component":
            {
                "name": "List2",
                "methods":
                {},
                "staticRenderFns": [],
                "_scopeId": "data-v-32a09a20",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\List2.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "list3",
            "name": "列表页3",
            "icon": "md-albums",
            "component":
            {
                "methods":
                {},
                "staticRenderFns": [],
                "_scopeId": "data-v-32846b1e",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\List3.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        }]
    },
    {
        "path": "/detail",
        "name": "详情页",
        "icon": "md-analytics",
        "redirect": "/detail/Detail1",
        "component":
        {},
        "children": [
        {
            "path": "detail1",
            "name": "详情页1",
            "icon": "ios-arrow-dropdown-circle",
            "component":
            {
                "name": "Detail1",
                "staticRenderFns": [],
                "_scopeId": "data-v-23285a9c",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Detail1.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "detail2",
            "name": "详情页2",
            "icon": "ios-arrow-dropup-circle",
            "component":
            {
                "name": "Detail2",
                "staticRenderFns": [],
                "_scopeId": "data-v-2336721d",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Detail2.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "detail3",
            "name": "详情页3",
            "icon": "ios-arrow-dropleft-circle",
            "component":
            {
                "name": "Detail3",
                "staticRenderFns": [],
                "_scopeId": "data-v-2344899e",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Detail3.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "detail4",
            "name": "详情页4",
            "icon": "ios-arrow-dropright-circle",
            "component":
            {
                "name": "Detail4",
                "staticRenderFns": [],
                "_scopeId": "data-v-2352a11f",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Detail4.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        }]
    },
    {
        "path": "/table",
        "name": "图标页",
        "icon": "ios-barcode",
        "redirect": "/table/Table1",
        "component":
        {},
        "children": [
        {
            "path": "table1",
            "name": "图标页1",
            "icon": "ios-flag",
            "component":
            {
                "name": "Table1",
                "staticRenderFns": [],
                "_scopeId": "data-v-8d4cbe92",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Table1.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "table2",
            "name": "图标页2",
            "icon": "ios-alert",
            "component":
            {
                "name": "Table2",
                "staticRenderFns": [],
                "_scopeId": "data-v-8d308f90",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Table2.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "table3",
            "name": "图标页3",
            "icon": "md-baseball",
            "component":
            {
                "name": "Table3",
                "staticRenderFns": [],
                "_scopeId": "data-v-8d14608e",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Table3.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        }]
    },
    {
        "path": "/picture",
        "name": "图片页",
        "icon": "md-bookmarks",
        "redirect": "/picture/Picture1",
        "component":
        {},
        "children": [
        {
            "path": "picture1",
            "name": "图片页1",
            "icon": "ios-man",
            "component":
            {
                "name": "Picture1",
                "staticRenderFns": [],
                "_scopeId": "data-v-2eb64e87",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Picture1.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "picture2",
            "name": "图片页2",
            "icon": "ios-woman",
            "component":
            {
                "name": "Picture2",
                "staticRenderFns": [],
                "_scopeId": "data-v-2ec46608",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Picture2.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "picture3",
            "name": "图片页3",
            "icon": "ios-female",
            "component":
            {
                "name": "Picture3",
                "staticRenderFns": [],
                "_scopeId": "data-v-2ed27d89",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Picture3.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        }]
    },
    {
        "path": "/article",
        "name": "文章页",
        "icon": "ios-cafe",
        "redirect": "/article/Article1",
        "component":
        {},
        "children": [
        {
            "path": "article1",
            "name": "文章页1",
            "icon": "ios-person",
            "component":
            {
                "name": "Article1",
                "staticRenderFns": [],
                "_scopeId": "data-v-460d198f",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Article1.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "article2",
            "name": "文章页2",
            "icon": "ios-pizza",
            "component":
            {
                "name": "Article2",
                "staticRenderFns": [],
                "_scopeId": "data-v-461b3110",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Article2.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        },
        {
            "path": "article3",
            "name": "文章页3",
            "icon": "ios-call",
            "component":
            {
                "name": "Article3",
                "staticRenderFns": [],
                "_scopeId": "data-v-46294891",
                "beforeCreate": [null, null],
                "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\pagesmenu\\Article3.vue",
                "beforeDestroy": [null]
            },
            "hidden": false
        }]
    },
    {
        "path": "/text",
        "name": "测试页",
        "icon": "ios-home",
        "component":
        {
            "name": "Text",
            "methods":
            {},
            "staticRenderFns": [],
            "__file": "E:\\资料\\framework\\vue框架\\vue管理框架_完美登录\\src\\views\\pages\\Text.vue",
            "beforeCreate": [null],
            "beforeDestroy": [null]
        }
    }
]
export default routes;