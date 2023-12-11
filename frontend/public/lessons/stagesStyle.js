
export const codeStyle = (type) => {
    return {
        padding: "3px",
        fontStyle: "italic",
        paddingInline: "5px",
        borderRadius: "8px",
        fontSize: "14px",
        color:
            type == 0
                ? "#E9D8A6"
                : type == 1
                    ? "var(--text-color)"
                    : "#CA6702",
        background: "var(--prueba)",
        marginInline:3
    };
};

export  const variableStyle = (type) => {
    return {
        marginInline: 3,
        padding: "3px",
        
        fontWeight: "bold",
        fontSize: "15px",
        borderRadius: "8px",
        color:
            type == 0
                ? "#CA6702"
                : type == 1
                    ? "var(--text-color)"
                    : "var(--secondary-color)",
    };
};

export  const valueStyle = (type) => {
    return {
        marginInline: 3,
        padding: "3px",
        
        fontWeight: "bold",
        fontSize: "15px",
        borderRadius: "8px",
        color:
            type == 0
                ? "#102F96"
                : type == 1
                    ? "var(--text-color)"
                    : "var(--secondary-color)",
    };
};