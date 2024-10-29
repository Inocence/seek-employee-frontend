import backImage from '../../assets/common/search-bg.svg';

const Search = () => {
    const backStyles = {
        backgroundImage: `url('${backImage}')`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    
    return ( 
        <div className="">
            <div className="bg-blue-950 h-48" style={backStyles}></div>
        </div>
     );
}
 
export default Search;