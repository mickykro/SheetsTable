export class Environment {

    static env = {
        "project_id": "sheetstable-377814",
        "private_key": "nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDX6mM/mafnzVWz\nqFJFuiOpUsUDnUrjWt0D6itdTPyZXMcGoD3R0+yf31kNUFkfoBrgl81geqeESPEf\nO2rDx8QVIuaQh0gxiiCawjCcS1EHrmherEzU7mKaLqcOKW30NcGmGojqwhv+4t36\nOUpTVp4YeeWVlITEbYA0U8o8NbXERuH6eAB3MfDNT6nOX/K+uP/khjavLC33SDHu\nsWv6ewvjuF6UZ5Qt6E0LRnBdP3DNK8PJOa4MDTiSk0nwR8w33It9BLWcZGYxHyQZ\nmvbaZce+xB4e9OphsXCMZNaSDPxYG2fk6n3LrWz5Piu0BHetr7PEP9sjPQ4FPKcG\nLHOz5jTNAgMBAAECggEANd5XwCqnGj1fxCi6zAQueQR6PFZeNH57NUqTYp3+SIn9\n6tCIU+UmfFWWK2zwK2R/yCh/eDJpwGaNZ/AkSS+6I1bXhNgHojp2u3228IuW7g5s\nojAlJBvMlHCOw8kA0oSl6XnlzoI6x1sVLCRmf4fU/kDNT4YkILi8G3ILOv3geVUL\nOE9K+mBu5WKag4hbKaA/XV8wJWOZxVID0wXp0khZn/JUdQLeiuhzEmCCebpvsixg\nQrf2hp6eXisjq0IJpq+Q+vHth0Ng/mPnzfNGvRPRuDuLP4MRNnPZzyANTaddJe+D\njX1PgnBMjF5BzjRQ3zXDZvAJQuiMVjoAawB6fLy0iQKBgQD/6SrmGqz9mbrkEWyg\nThirLShpECwr+PrOWffqeRNOed/WhGfHru7PhwGP8pzg0JzHFHPdi73nrlVvI83+\nSh6xgBWFk3XkqW3aHbPT4iF5plQLKpbFe3s8tQZ22T/F1lfcUu23O9/EOU6Ev11J\nLswOC1t7SASVzr7mVLGM//CsdQKBgQDX/abX1UcK8qUJl6h3xReStBfkOm/Ga6sQ\nq39i7rzbAQhCPlyUe8Pau2QwRiv4rYKhjQlGklIYYryLRJFeiPmhYXrKq4FWyWjV\nj/7Ae69ZhSqB48dDnRb1kBvoegbuSQtt9peW/xg+jRgEO0Rh3Hi5uXrtRuoujyBy\no+pEmuG7+QKBgGgSTtvdJVTM2/A8FczrdaTHbJOtfAk16+lXNTcpnexgK+N1XS8b\nuQq0gLIlnB7hN6DOdIA4gDZj82KLUQ6E3g6ZZCc6XMttC7uUMLmOUMbEGZGg9EfD\ne86oX8SdfQ3bqUd0gi/uLYYDOCdMG4fTfDCJ9d4g35x8w62v67THsPyxAoGBAIgB\n3XHDhzzJlkr4CMmCflmOtgytD31uhwW0OD7f/mQZvk2YX0vQs3+kyG3tgfrRp5R6\n7wBVWwSoB/nab3+L2UVZ0KyWWpd/tFfmmJA0UjKYvC+Wcv+Mh8yRtkEptfuOW3ge\n803NzEJ3Lkxb1a+Z2Rt6RIHtScGPtur5dKdGsCZhAoGAPM3ZcVAOCM5xXzRE73Uq\nDmfOx+HMCLldJIHKbjgz/H7ogsgpuLgNv2K4/TY3FS3XUo5YMHOf4C2pfwZfHtal\n7GojgBxIrb03ZSIexqbHgxLNsGoKxPitBHIH4aBZKNcMYi5zOCl2pPaiP3TnQZgD\n9ULQvoeWPw/N98yVqcNoAdE=",
        "client_email": "sheetstable@sheetstable-377814.iam.gserviceaccount.com",
        "client_id":"104665556911021920950",
        "spread_sheet_id": '1Ug9yYtnWxvI85ZDGOHvAsC3wd25e2hz8k8rd_vEIkbo',
        "api_key":"AIzaSyCh9Xfm_PvcZzUQc3SAsojmqp9vrDMyQSQ"
    }

    static buildRequest = () => `https://sheets.googleapis.com/v4/spreadsheets/${this.env.spread_sheet_id}/values/A1:Z1000/?key=${this.env.api_key}`
}