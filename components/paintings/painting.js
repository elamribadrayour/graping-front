import React, { Component } from "react";
import dynamic from 'next/dynamic'
import * as chromotome from 'chromotome';

let step = 10;
let colors = []
let width = 200;
let height = 200;
let radius = 267;


const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  })

export default class Painting extends Component 
{
    setup = (p5, canvasParentRef) => 
    {
        p5.createCanvas(width, height).parent(canvasParentRef);
    };

    draw = p5 => {  

        p5.rect(0, 0, width, height);
        p5.fill("#feffad")
        colors = p5.shuffle(chromotome.get("frozen-rose").colors);
        p5.stroke(10);
        p5.rect(0, 0, width, height);
        let row = 0;
        while(row < 10)
        {
            {
        
                let j = 0;
                let Size = 10;
                while(j < Size - 1)
                {
                    p5.rotate(Math.PI);
            
                    colors = p5.shuffle(colors);
             
                    p5.push();
                    
                    p5.translate(j * width / 10, row * width / 10);
            
                    p5.scale(2 / Size, 2 / Size);
                
                    p5.translate(width / 2, height / 2);
                
                    let i = 0;
                    while(radius - step*i > 0)
                    {
                        step = p5.random(18, 20);
                
                        if(radius - step*i <= 0)
                        {
                            break;
                        }
            
                        p5.beginShape();
                        p5.vertex(0, 0);
                        p5.bezierVertex(-radius + step*i, radius - step*i, radius - step*i, radius - step*i, 0, 0);
                        p5.endShape();
                
                        let color = colors[parseInt(p5.random(0, colors.length-1))];
                        p5.fill(color);
                    
                        i = i + 1;
                    }
                
                    p5.rotate(Math.PI)
            
                    i = 0;
                    while(radius - step*i > 0)
                    {
                        step = p5.random(18, 20);
                
                        if(radius - step*i <= 0)
                        {
                            break;
                        }
            
                        p5.beginShape();
                        p5.vertex(0, 0);
                        p5.bezierVertex(-radius + step*i, radius - step*i, radius - step*i, radius - step*i, 0, 0);
                        p5.endShape();
                
                        let color = colors[parseInt(p5.random(0, colors.length-1))];
                        p5.fill(color);
                    
                        i = i + 1;
                    }
            
                    p5.pop();
            
                    j = j + 1
                
                }
            }

            row = row + 1;
        }

        p5.noLoop();
    };

    render() {
        return( 
            <div className="flex items-center justify-center h-screen">
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}
