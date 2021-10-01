# API

**End point**: (https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats)

## JSON structure from API

        {
            "id": string,
            "free_ram": number,
            "allocated_ram": number,
            "free_disk": number,
            "allocated_disk": number,
            "up_since": string = yyyy-MM-dd'T'HH:mm:ss.SSS'Z
        }

### Example:

>       {
>           "id": "50",
>           "free_ram": 53800,
>           "allocated_ram": 3864,
>           "free_disk": 37317,
>           "allocated_disk": 49979,
>           "up_since": "2020-07-26T21:04:56.969Z"
>       }
