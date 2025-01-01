

const layout = ({ children }) => {
    return (
        <div className="grid gap-2">
            <div className="border-2 border-red-400
          col-start-1 col-end-3 
            ">
                Menubar
            </div>
            <div className="border-2 border-teal-500 col-start-3 col-end-13">
                {children}
            </div>
        </div>
    );
};

export default layout;