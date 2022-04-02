export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6248227cdb89753e5e15228b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6eykynor',
                  apiId: '094ca504-d332-4349-8fb2-9160afc8ca3b'
                },
                {
                  buildHookId: '6248227ca5c73d474948d8ba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iqjx38xt',
                  apiId: '5243f7b2-ac4f-49e1-805d-25c34823313d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sabbir78737/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iqjx38xt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
