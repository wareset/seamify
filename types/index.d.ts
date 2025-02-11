declare function pack(thing: any, proxyForFunctions?: TypeBuildProxyForFunctions | null, stringify?: boolean): string;
declare function unpack(a: string, proxyForFunctions?: TypeParseProxyForFunctions): any;
export type TypeBuildProxyForFunctions = (fn: Function) => string | null | undefined;
export type TypeParseProxyForFunctions = (fname: string) => Function | null | undefined;
export { pack, unpack };
declare const _default: {
    pack: typeof pack;
    unpack: typeof unpack;
};
export default _default;
