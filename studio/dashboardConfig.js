export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed94149f66bc201e04e03d9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fkif17om',
                  apiId: 'ee314cc6-3c9c-4c9a-9eac-181a0ce2aaaa'
                },
                {
                  buildHookId: '5ed941492312ba8208bcba6a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r4x1aoh4',
                  apiId: 'e2b72967-18e4-4cd5-a9df-3422a76e52d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/boohboohdog/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r4x1aoh4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
