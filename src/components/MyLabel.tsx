import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize all letters
   */

  allCaps?: boolean;

  /**
   * Label Color
   */
  color?: 'text-primary' | 'text-secundary' | 'text-tertiary';

  /**Font Oolor */
  fontColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color, fontColor,} : Props ) => {
  return (
    <>
      <span style={{ color: fontColor }} className={`${ size } ${ color }`}>{ allCaps ? label.toUpperCase() : label }</span>
    </>
  )
}
