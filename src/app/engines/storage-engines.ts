
import { StorageEngine } from "@ngxs/storage-plugin";

export class CustomStorageEngine implements StorageEngine{



    length!: number;
    getItem(key: string) {
        localStorage.getItem(key);
    }
    setItem(key: string, val: any): void {
        localStorage.setItem(key,val)
    }
    removeItem(key: string): void {
        localStorage.removeItem(key)
    }
    clear(): void {
        localStorage.clear()
    }
}