const GetByUserIdSender = {
    Send(id: string): [string, string] {
        let name = "Alex";

        return [id, name];
    }
}

export default GetByUserIdSender;
