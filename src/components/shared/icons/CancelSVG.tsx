import { IIconProps } from "@/services/types/propTypes/icon";


const CancelSVG = ({ className = "", fill = "none" }: IIconProps) => {
    return (
        <svg width="8" height="8" viewBox="0 0 8 8" fill={fill} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M6.69773 7.77599L4 5.07909L1.30227 7.77599C1.23159 7.84699 1.14757 7.90333 1.05505 7.94177C0.96253 7.98021 0.863328 8 0.76314 8C0.662952 8 0.563751 7.98021 0.471231 7.94177C0.378711 7.90333 0.294695 7.84699 0.224006 7.77599C0.153008 7.70531 0.0966713 7.62129 0.05823 7.52877C0.0197887 7.43625 0 7.33705 0 7.23686C0 7.13667 0.0197887 7.03747 0.05823 6.94495C0.0966713 6.85243 0.153008 6.76841 0.224006 6.69773L2.92091 4L0.224006 1.30227C0.153008 1.23159 0.0966713 1.14757 0.05823 1.05505C0.0197887 0.96253 0 0.863328 0 0.76314C0 0.662952 0.0197887 0.563751 0.05823 0.471231C0.0966713 0.378711 0.153008 0.294695 0.224006 0.224006C0.294695 0.153008 0.378711 0.0966713 0.471231 0.05823C0.563751 0.0197887 0.662952 0 0.76314 0C0.863328 0 0.96253 0.0197887 1.05505 0.05823C1.14757 0.0966713 1.23159 0.153008 1.30227 0.224006L4 2.92091L6.69773 0.224006C6.76841 0.153008 6.85243 0.0966713 6.94495 0.05823C7.03747 0.0197887 7.13667 0 7.23686 0C7.33705 0 7.43625 0.0197887 7.52877 0.05823C7.62129 0.0966713 7.70531 0.153008 7.77599 0.224006C7.84699 0.294695 7.90333 0.378711 7.94177 0.471231C7.98021 0.563751 8 0.662952 8 0.76314C8 0.863328 7.98021 0.96253 7.94177 1.05505C7.90333 1.14757 7.84699 1.23159 7.77599 1.30227L5.07909 4L7.77599 6.69773C7.84699 6.76841 7.90333 6.85243 7.94177 6.94495C7.98021 7.03747 8 7.13667 8 7.23686C8 7.33705 7.98021 7.43625 7.94177 7.52877C7.90333 7.62129 7.84699 7.70531 7.77599 7.77599C7.70531 7.84699 7.62129 7.90333 7.52877 7.94177C7.43625 7.98021 7.33705 8 7.23686 8C7.13667 8 7.03747 7.98021 6.94495 7.94177C6.85243 7.90333 6.76841 7.84699 6.69773 7.77599Z" fill="white" />
        </svg >

    );
};

export { CancelSVG };
