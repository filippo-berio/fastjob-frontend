import { of, tap } from 'rxjs';

export function ObservableCache(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    let cached: any;
    descriptor.value = function (...args: any[]) {
        if (!cached) {
            return originalMethod.apply(this, args).pipe(
                tap(result => cached = result)
            );
        }
        return of(cached);
    }
    return descriptor;
}
