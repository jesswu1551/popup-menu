/**
 * @classdesc A container of the absolute coordinates of the {@link PopupMenu}
 * item to be displayed.
 */
class PopupMenuPosition {
  /**
   * Provide at least two coordinates to determine the absolute position of the
   * {@link PopupMenu} in a browser or in a webview.
   * @constructor
   * @param {number} [left] Left horizontal offset
   * @param {number} [top] Top vertical offset
   * @param {number} [right] Right horizontal offset
   * @param {number} [bottom] Bottom vertical offset
   */
  constructor(left, top, right, bottom) {
    const isProvided = arg => arg !== null && arg !== undefined;

    // Validate input
    if (isProvided(left) && typeof(left) !== 'number') {
      throw new Error('Invalid Parameter: left must be an integer');
    }
    if (isProvided(top) && typeof(top) !== 'number') {
      throw new Error('Invalid Parameter: top must be an integer');
    }
    if (isProvided(right) && typeof(right) !== 'number') {
      throw new Error('Invalid Parameter: right must be an integer');
    }
    if (isProvided(bottom) && typeof(bottom) !== 'number') {
      throw new Error('Invalid Parameter: bottom must be an integer');
    }

    this.left = isProvided(left) ? `${left}px` : undefined;
    this.top = isProvided(top) ? `${top}px` : undefined;
    this.right = isProvided(right) ? `${right}px` : undefined;
    this.bottom = isProvided(bottom) ? `${bottom}px` : undefined;
  }

  /**
   * Places the {@link PopupMenu} under the provided dom element. Aligns the left border
   * of the {@link PopupMenu} with the left border of the provided dom element.
   * @param {HTMLElement} domElement The menu will be displayed under this element
   */
  static alignBottomLeft(domElement) {
    const rect = domElement.getBoundingClientRect();
    return new PopupMenuPosition(
      rect.left,
      rect.bottom
    );
  }

  /**
   * Places the {@link PopupMenu} under the provided dom element. Aligns the right
   * border of the {@link PopupMenu} with the right border of the provided dom element.
   * @param {HTMLElement} domElement The menu will be displayed under this element.
   */
  static alignBottomRight(domElement) {
    const rect = domElement.getBoundingClientRect();
    return new PopupMenuPosition(
      undefined,
      rect.bottom,
      window.innerWidth - rect.right
    );
  }

  /**
   * Places the {@link PopupMenu} on the top of the provided dom element. Aligns the left
   * border of the {@link PopupMenu} with the left border of the provided dom element.
   * @param {HTMLElement} domElement The menu will be displayed on top of this element.
   */
  static alignTopLeft(domElement) {
    const rect = domElement.getBoundingClientRect();
    return new PopupMenuPosition(
      rect.left,
      undefined,
      undefined,
      window.innerHeight - rect.top
    );
  }

  /**
   * Places the {@link PopupMenu} on the top of the provided dom element. Aligns the right
   * border of the {@link PopupMenu} with the right border of the provided dom element.
   * @param {HTMLElement} domElement The menu will be displayed on top of this element.
   */
  static alignTopRight(domElement) {
    const rect = domElement.getBoundingClientRect();
    return new PopupMenuPosition(
      undefined,
      undefined,
      window.innerWidth - rect.right,
      window.innerHeight - rect.top
    );
  }
}
/**
 * @ignore
 */
export default PopupMenuPosition;