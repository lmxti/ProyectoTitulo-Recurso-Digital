
export const codeStyle = (type) => {
    return {
        padding: "3px",
        fontStyle: "italic",
        borderRadius: "8px",
        fontSize: "14px",
        color:
            type == 0
                ? "var(--primary-color)"
                : type == 1
                    ? "var(--text-color)"
                    : "var(--secondary-color)",
        background: "var(--bg-color)",
    };
};

export  const variableStyle = (type) => {
    return {
        padding: "3px",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: "16px",
        color:
            type == 0
                ? "var(--primary-color)"
                : type == 1
                    ? "var(--text-color)"
                    : "var(--secondary-color)",
    };
};