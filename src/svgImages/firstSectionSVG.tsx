/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

/**
 * The FirstSectionSVG component.
 */
const FirstSectionSVG = (): ReactElement => {
    const theme = useTheme();
	
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 932 932">
            <g fill="none" fillRule="evenodd">
                <path d="M466.727 3c218.204 0 367.74 105.729 436.409 317.067 68.668 211.338 3.061 389.691-166.694 513.025-169.755 123.333-360.89 129.715-539.43 0C18.471 703.376-36.179 524.717 30.317 320.067 96.813 115.417 248.522 3 466.727 3z" stroke={theme.colors.color} strokeWidth="5" opacity=".1"/>
                <path d="M570.767 48.886C767.63 97.969 878.785 226.884 893.251 432.783c14.466 205.898-84.8 351.87-265.665 424.83-180.865 72.96-354.741 35.719-486.673-121.338C8.98 579.22-.18 405.923 105.796 236.455 211.772 66.986 373.904-.198 570.767 48.885z" stroke={theme.colors.color} strokeWidth="2" opacity=".4"/>
                <path d="M674.818 157.33c145.738 98.302 198.06 236.166 148.868 408.024C774.493 737.21 650.453 826.584 481.6 832.35c-168.854 5.766-299.386-76.084-360.29-243.01-60.903-166.928-17.045-310.68 119.416-417.187S529.08 59.028 674.818 157.33z" stroke={theme.colors.primary} strokeWidth="22" opacity=".7"/>
                <path d="M637.11 213.173c119.44 80.563 162.353 193.502 122.102 334.251-40.25 140.75-141.853 213.914-280.199 218.584-138.346 4.67-245.321-62.412-295.274-199.159-49.954-136.746-14.065-254.476 97.71-341.67 111.773-87.196 236.222-92.57 355.661-12.006z" stroke={theme.colors.color} strokeWidth="11"/>
                <path d="M619.828 238.767c107.386 72.433 145.987 173.948 109.834 300.44C693.509 665.697 602.19 731.433 477.827 735.6c-124.363 4.168-220.541-56.147-265.476-179.06-44.934-122.913-12.697-228.717 87.761-307.06 100.46-78.344 212.33-83.147 319.716-10.714z" stroke={theme.colors.primary} strokeWidth="6"/>
                <path d="M658.495 438.762c12.784 90.966-22.31 159.468-105.947 200.414-83.637 40.947-161.46 23.993-222.564-39.585-61.104-63.579-74.95-142.888-31.606-224.88 43.344-81.991 114.248-115.188 203.031-99.397 88.783 15.791 144.302 72.483 157.086 163.448z" stroke={theme.colors.color} strokeWidth="11"/>
                <path d="M531.983 456.478c4.322 30.758-7.651 53.936-36.146 67.811-28.496 13.876-54.991 8.169-75.778-13.311-20.786-21.48-25.474-48.296-10.686-76.039 14.787-27.742 38.944-38.992 69.172-33.682 30.228 5.31 49.115 24.463 53.438 55.221z" stroke={theme.colors.color} strokeWidth="11" opacity=".9"/>
                <path d="M489.934 462.367c1.541 10.962-2.728 19.222-12.886 24.168-10.158 4.945-19.604 2.912-27.013-4.744-7.41-7.655-9.08-17.212-3.809-27.1 5.272-9.887 13.884-13.896 24.66-12.004 10.775 1.892 17.508 8.718 19.048 19.68z" stroke={theme.colors.color} strokeWidth="4" opacity=".9"/>
                <path d="M609.836 445.576c9.566 68.061-16.611 119.303-79.03 149.917-62.417 30.613-120.51 17.91-166.134-29.673-45.625-47.582-55.98-106.922-23.648-168.255 32.332-61.332 85.248-86.151 151.52-74.314 66.273 11.836 107.727 54.265 117.292 122.325z" stroke={theme.colors.primary} strokeWidth="21"/>
            </g>
        </svg>
    );
};

export {
    FirstSectionSVG
};