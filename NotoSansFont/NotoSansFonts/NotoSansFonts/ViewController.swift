//
//  ViewController.swift
//  NotoSansFonts
//
//  Created by jangilkyu on 2022/06/27.
//

import UIKit

class ViewController: UIViewController {
    
    let lb: UILabel = {
        let lb = UILabel()
        lb.text = "Hello World"
        lb.textAlignment = .center
        lb.adjustsFontSizeToFitWidth = true
        lb.font = WDFont.Bold.of(size: 30)
        return lb
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        setup()
    }
    
    func setup() {
        addViews()
        setConstraints()
    }
    
    func addViews() {
        view.addSubview(lb)
    }
    
    func setConstraints() {
        lb.translatesAutoresizingMaskIntoConstraints = false
        lb.widthAnchor.constraint(equalToConstant: 100).isActive = true
        lb.heightAnchor.constraint(equalToConstant: 100).isActive = true
        lb.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        lb.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true
    }
}

