export default class HttpClient {

    private static BASE_URI = 'http://localhost:3000/api'

    public static async profile(){
        return await fetch(`${HttpClient.BASE_URI}/user/profile`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsYWlic3hreDAwMDA5aHE5dW1sczdwY3YiLCJpbnRlcm5hbF9pZCI6MSwiZW1haWwiOiJteS1lbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE2Njg1MjQwNjl9.y21kjqAvMKdm2bdBPT2L9S1dJspUhSRtAhwryYizjuw"
            }
        })
    }

    public static async findUser(id?: string){
        if(id === undefined) return this.profile();

        const response = await fetch(`${HttpClient.BASE_URI}/user/${id}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsYTBkdHYwcDAwMDA5aHU0em1uNWkxbXoiLCJlbWFpbCI6Im15LWVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY2NzYxMjA3OX0.vKvMsropIyTmgDSuzvPeaYJGtWUyz5yW3flQrRn_FuQ"
            }
        })

        return response
    }

    public static async createUser(user : object){
        const request = await fetch(`${HttpClient.BASE_URI}/users/create`, {
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })

        return request;
    }

    public static async fetchOrder(id){
        const response = await fetch(`${HttpClient.BASE_URI}/orders/${id}`)
        
        return response
    }

    public static async fetchOrders(query = ""){
        const response = await fetch(`${HttpClient.BASE_URI}/orders${query}`)
        
        return response
    }

    public static async createOrder(order : object | FormData ){
        const content = (order instanceof FormData)
            ? { body: order, headers: { "Content-Type": "multipart/form-data" }}
            : { body: JSON.stringify(order), headers: { "Content-Type": "application/json"}}

        const response = await fetch(`${HttpClient}/orders/create`, content)

        return response

    }

}