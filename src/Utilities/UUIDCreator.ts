import { v4 as uuidv4 } from 'uuid'; 

const UUIDCreator = {
    Create() {
        return uuidv4();
    }
}

export default UUIDCreator;