import { IIconProps } from "@/services/types/propTypes/icon";


const downSVG = ({ className = "" }: IIconProps) => {
    return (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.31005 6.87885C6.14651 7.04038 5.87393 7.04038 5.71039 6.87885L0.122658 1.30577C-0.0408859 1.14423 -0.0408859 0.875 0.122658 0.713462L0.722317 0.121154C0.886133 -0.0403846 1.15871 -0.0403846 1.32198 0.121154L5.71039 4.50962C5.87393 4.67115 6.14651 4.67115 6.31005 4.50962L10.6987 0.148077C10.862 -0.0134615 11.1346 -0.0134615 11.2984 0.148077L11.8978 0.740385C12.0341 0.901923 12.0341 1.14423 11.8978 1.30577L6.31005 6.87885Z" fill="#A8A8A8" />
        </svg>
    );
};

export { downSVG };
