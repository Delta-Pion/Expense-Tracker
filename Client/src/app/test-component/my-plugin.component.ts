import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import * as d3 from 'd3';
import { RouterLink } from '@angular/router';

/* Don't forget to download the CSS file too
OR remove the styleUrls if you're already using Tailwind */

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CardModule, RouterLink],
  styleUrl: './my-plugin.component.css',
  templateUrl: './my-plugin.component.html'
})
export class MyPluginComponent implements OnInit {
  private data = [
    { "Framework": "2020", "Stars": "166443", "Released": "1" },
    { "Framework": "2021", "Stars": "150793", "Released": "2" },
    { "Framework": "2022", "Stars": "62342", "Released": "3" },
    { "Framework": "2023", "Stars": "27647", "Released": "4" },
    { "Framework": "2024", "Stars": "21471", "Released": "5" }
  ]
  private svg: any;
  private svgp: any;
  private svgs: any;
  private margin = 50;
  private width = 500 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("div#Bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.Framework))
      .attr("y", (d: any) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Stars))
      .attr("fill", "#111827");
  }

  private radius = Math.min(this.width) / 2 - this.margin;
  private colors: any;

  private createPieSvg(): void {
    this.svgp = d3.select("div#Pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createPieColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Stars.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawPieChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    // Build the pie chart
    this.svgp
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(100)
      .outerRadius(this.radius);

    this.svgp
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }

  private createScSvg(): void {
    this.svgs = d3.select("div#Scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawScPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([1, 10])
      .range([0, this.width]);
    this.svgs.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);
    this.svgs.append("g")
      .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svgs.append('g');
    dots.selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.Released))
      .attr("cy", (d: any) => y(d.Stars))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
      .data(this.data)
      .enter()
      .append("text")
      .text((d: any) => d.Framework)
      .attr("x", (d: any) => x(d.Released))
      .attr("y", (d: any) => y(d.Stars))
  }



  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);

    this.createPieSvg();
    this.createPieColors();
    this.drawPieChart();

    this.createScSvg();
    this.drawScPlot();
  }
}
