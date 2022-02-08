import sanityClient from "@sanity/client"
export const client = sanityClient({
  projectId: 'pb6comxs',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skxI47y48dzkwI4Zg9h6bhh1dYmjqWwE915JCjoZvNigPzA6o0rGRO9VMqBeGDmoosqtc8IFQuvBzMyB6lgd26lnKG408SzpiKPfPTcMAPhlj6cqs1V9Hb5ul5xb8rMivb9Laooic95cMtXfOeprPw11qhtBA7SSvhmUNUiut8Dixr0FnjJ9',
  useCdn: false,
})