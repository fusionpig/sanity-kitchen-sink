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
                  buildHookId: '61795da6dd9fb01e9cc83859',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rb2z44e1',
                  apiId: 'f12b173f-831a-4ef0-a264-fc6b77fd6bd2'
                },
                {
                  buildHookId: '61795da6c2577f202af06381',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r5m46wcx',
                  apiId: 'a176dbec-e994-4cc1-9328-5fe8ab9a541b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fusionpig/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r5m46wcx.netlify.app', category: 'apps'}
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
