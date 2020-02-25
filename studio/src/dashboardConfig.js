export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e554483f2cc3d7509e7d7ca',
                  title: 'Sanity Studio',
                  name: 'sanityblog-studio-633j2d5w',
                  apiId: '7253e1aa-2ac0-4123-bc44-87a7ce54caec'
                },
                {
                  buildHookId: '5e554483ce6d35b1953801e5',
                  title: 'Blog Website',
                  name: 'sanityblog-web',
                  apiId: '4bcfb42e-1cfe-45ea-aa29-6ce60e612148'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/j-k-projects/sanityblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanityblog-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
