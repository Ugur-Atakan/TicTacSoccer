import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';


const SoccerSVG = ({color}: any) => {
  return (
    <View>
      <Svg width={56} height={56} viewBox="0 0 434 434">
        <Path
          d="M271.063165,15.7244178 C273.864811,16.960698 277.684595,19.4995861 285.975507,22.3986064 C317.935954,35.6328718 378.489065,50.1924525 403.722945,58.1333266 C434,84.602644 432.319608,149.457313 434,186.509478 C428.951924,194.450352 363.354538,197.097048 354.942578,187.834479 L353.258585,158.718465 C314.56957,268.568534 338.118057,314.891611 344.846425,390.32598 C349.894501,448.558007 82.445279,448.558007 87.4864538,390.32598 C94.2146216,314.887676 119.446901,268.568534 79.0742935,158.718465 L79.0742935,187.834479 C68.9819417,197.099881 3.38065502,194.453343 0.016871175,186.509478 C0.016871175,149.452591 -1.66712124,84.600283 28.6135349,58.1333266 C55.5258061,50.1924525 114.399525,35.6328718 146.360973,22.3986064 C156.952126,18.6954252 157.203248,16.3219462 161.037526,15.7244178 C161.445549,15.660832 201.422045,11.0592343 218.050811,11 C236.90501,10.9379416 268.74876,14.7031426 271.063165,15.7244178 Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

const AddSVG = () => {
  return (
    <View>
      <Svg width={56} height={56} viewBox="0 0 448 512">
        <Path
          d="M129.104 47.508c.047-.114 1.363 10.138 1.471 10.118 1.543-.288 6.742-2.28 7.727-2.879.086-.051-2.664 6.914-7.09 10.649-.123.104.365 5.703.422 8.346.002.125-4.652-1.715-6.85-2.952-3.197 2.064-10.75 4.393-10.746 4.529l.193 7.558c.002.079 11.279-1.264 11.166-1.171-9.254 7.697-17.75 11.196-28.595 11.255-.222.001 4.72-3.058 5.642-5.049-.799-.79-4.436-3.843-5.283-4.857.111-.198 6.678.397 9.781.387 2.141-2.23 4.18-4.571 5.93-7.126 2.072-3.023 4.205-6.024 5.824-9.324.076-.158-5.588-4.755-7.674-7.499-.092-.12 7.701.22 11.434-.129.478-.046 5.044-8.047 6.648-11.856zM105.158 10.482c-2.184 1.444-7.941 6.427-7.709 6.506 2.898.993 5.93 1.979 8.738 3.481.088.046.15.128.248.283-4.238.302-8.287.168-12.612 1.061-1.924 2.482-3.826 7.103-4.482 10.247 1.975 3.204 3.921 6.374 6.087 9.391.301.122 9.771-2.449 14.327-3.713 0 0-8.471 11.367-8.42 11.427 0 0 9.016 9.934 8.91 9.919-4.594-.662-13.831-2.909-13.918-2.761l-6.263 10.515c-.757 3.573-1.339 7.356-1.748 11.183.14.274 8.287 4.633 8.287 4.633.111.06-5.492.783-8.203.724-.245-.005-.137 5.964.344 8.632.023.13-1.366.086-1.926-.032-1.603-1.479-7.319-9.013-7.509-9.032-4.63-.455-9.261-1.182-13.623-2.865-.115-.044 9.704-4.006 9.713-4.034.062-.179-2.927-6.051-3.764-8.939-2.583-1.532-7.735-4.572-7.833-4.437-1.832 2.566-5.477 7.837-5.5 7.803-.524-.786-.85-1.576-1.14-2.299.136-3.331.896-10.198.708-10.342-1.41-1.069-4.375-4.018-4.167-4.26 2.152-.798 4.298-1.385 6.518-2.009.994-2.497 4.286-8.35 4.585-8.915-.026-.36-2.873-3.515-3.802-4.963-.157-.246-6.827 6.078-6.816 6.008C56.159 30.92 64.406 21.923 69.022 18.86c.078-.052-1.781 5.341-2.249 8.093-.027.163 4.23.201 6.182.329.025.171-6.054 4.682-7.474 5.872-.235 4.476-.372 10.533.475 16.773.219.231 6.198-.013 10.52-.626 2.402-1.347 9.771-4.228 10.745-4.548.159-.052 1.004-8.609 1.947-12.688-.37-.53-5.573-7.92-5.573-7.92-.12-.178-6.521 1.72-9.462 2.737-.132.046 4.644-5.71 6.964-7.103.21-.477-2.355-6.547-2.355-6.547-.036-.13 7.223.553 10.637 1.53 4.688-2.491 15.885-4.348 15.779-4.28zM68.34 57.104c-.185.217-.425.457-.344.762.834 3.154 2.191 6.131 3.767 9.123L73.034 68c2.34 1.774 4.67 3.566 7.103 5.218a.958.958 0 0 0 1.073.007c3.013-1.977 6.043-3.958 8.71-6.466-1.011-4.229-1.963-8.542-2.146-12.945-.007-.167-.096-.38-.208-.42L76.51 49.489c-2.947 2.36-5.761 4.788-8.17 7.615z M121.625 17.585c.059-.083 3.244 6.427 4.184 9.735 6.58 4.474 10.012 8.661 10.131 8.778-.164.142-7.799-.308-7.779-.182.527 3.435.99 6.916 1.09 10.422-.045 0-.219.012-.227 0 0 0-7.725-11-8.062-10.788-3.656.277-7.098 1.018-10.623 1.827.025-.006-.064-.028-.129-.106 1.977-2.382 4.021-4.682 5.785-7.202.146-.209-9.412-9.392-9.322-9.386 4.215.238 8.213 1.635 12.162 2.991.18"
          fill="green"
        />
      </Svg>
    </View>
  );
};

export {SoccerSVG, AddSVG};
