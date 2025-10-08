const iconSvgPath = (path, type="svg") => {
    return `/${type}/${type==="svg"?path+'.svg':path}`
};

export default iconSvgPath