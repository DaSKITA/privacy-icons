from graphqlclient import GraphQLClient

client = GraphQLClient('http://ec2-18-185-97-19.eu-central-1.compute.amazonaws.com:8082/')

result = client.execute('''
query {
  TiltNodes {
    edges {
      node {
        meta {
          name
        }
      }
    }
  }
}
''')

print(result)

