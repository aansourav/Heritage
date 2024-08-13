import Image from "next/image";
import logo from "../../public/assets/logo.png";
export default function Logo() {
    return (
        <div>
            <Image src={logo} alt="heritage logo" className="w-full max-w-12" />
        </div>
    );
}
