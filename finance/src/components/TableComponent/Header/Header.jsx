const Header = ({keys}) => {
    return (
        <thead >
            <tr>{keys.map((key) => <th key={key}>{key}</th>)}</tr>
        </thead>
    );
};

export default Header