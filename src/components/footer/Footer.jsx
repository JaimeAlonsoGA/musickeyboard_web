import icon from '../../assets/icon.png';
import dev from '../../assets/dev.webp';

const Footer = () => {
    return (
        <div className="mt-12  px-4 mb-2">
            {/* <img src={icon} alt="musickeyboard.io logo" className="w-10" /> */}
            <div className="text-center text-sm text-medium">
                <p className="text-xs">current version: 1.0.2</p>
                <p>musickeyboard.io© 2024 developed and updated by Jaime Alonso García-Amorena</p>
                {/* <p>Are you a recurrent user? support the developer with a donation<a href=" */}
            </div>
            {/* <img src={dev} alt="developer with sunglasses" className="w-10" /> */}
        </div>
    );
}

export default Footer;