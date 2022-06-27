//
//  WDFont.swift
//  NotoSansFonts
//
//  Created by jangilkyu on 2022/06/27.
//

import UIKit

enum WDFont: String {
    case Black = "NotoSansKR-Black"
    case Bold = "NotoSansKR-Bold"
    case Light = "NotoSansKR-Light"
    case Medium = "NotoSansKR-Medium"
    case Regular = "NotoSansKR-Regular"
    case Thin = "NotoSansKR-Thin"
    
    func of(size: CGFloat) -> UIFont {
        return UIFont(name: self.rawValue, size: size)!
    }
    
    static func black(size: CGFloat) -> UIFont {
        return WDFont.Black.of(size: size)
    }
    
    static func bold(size: CGFloat) -> UIFont {
        return WDFont.Bold.of(size: size)
    }
    
    static func light(size: CGFloat) -> UIFont {
        return WDFont.Light.of(size: size)
    }
    
    static func medium(size: CGFloat) -> UIFont {
        return WDFont.Medium.of(size: size)
    }
    
    static func regular(size: CGFloat) -> UIFont {
        return WDFont.Regular.of(size: size)
    }
    
    static func thin(size: CGFloat) -> UIFont {
        return WDFont.Thin.of(size: size)
    }

}
