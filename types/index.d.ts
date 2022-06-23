declare const pack: (thing: any, proxyForFunctions?: TypeBuildProxyForFunctions | null, stringify?: boolean) => string;
declare const unpack: (a: string, proxyForFunctions?: TypeParseProxyForFunctions) => any;
export declare type TypeBuildProxyForFunctions = (fn: Function) => string | null | undefined;
export declare type TypeParseProxyForFunctions = (fname: string) => Function | null | undefined;
export { pack, unpack };
declare const _default: {
    pack: (thing: any, proxyForFunctions?: TypeBuildProxyForFunctions, stringify?: boolean) => string;
    unpack: (a: string, proxyForFunctions?: TypeParseProxyForFunctions) => any;
};
export default _default;
