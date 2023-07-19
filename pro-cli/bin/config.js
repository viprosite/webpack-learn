exports.projectName = [{
    type: 'input',
    name: 'projectName',
    messaage: '输入项目名称'
}]


exports.frameworkList = [
    {
        type: 'list',
        name: 'frameworkType',
        message: '选择需要的框架类型',
        choices: ['Vue', 'React']
    }
]

exports.vueVersions = [
    {
        type: 'list',
        name: 'vueVersion',
        message: '选择使用的Vue版本',
        choices: ['2.x', '3.x']
    }
]

exports.gitRepos = [
    {
        type: 'vue',
        version: 2,
        url: 'viprosite/template-vue-2'
    },
    {
        type: 'vue',
        version: 3,
        url: 'viprosite/template-vue-3'
    },
    {
        type: 'react',
        url: 'viprosite/template-react'
    }
]