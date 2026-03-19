#!/usr/bin/env node

/**
 * Generate documentation statistics
 * 
 * This script:
 * 1. Counts total documents by category
 * 2. Calculates machine readability rate
 * 3. Analyzes frontmatter completeness
 * 4. Generates visual reports
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const aiDocsDir = join(rootDir, 'ai-docs');

console.log('📊 Generating documentation statistics...\n');

const stats = {
  totalFiles: 0,
  totalLines: 0,
  categories: {},
  frontmatterStats: {
    complete: 0,
    incomplete: 0,
    missing: 0
  },
  aiTags: {
    'AI-First': 0,
    'Auto-Generated': 0,
    'Human-Written': 0,
    'Prompt-Template': 0,
    'Quick-Start': 0,
    'Code-As-Docs': 0,
    'Docs-As-Code': 0
  },
  filesWithExamples: 0,
  filesWithDiagrams: 0
};

/**
 * Analyze a markdown file
 */
function analyzeFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const lineCount = lines.length;
    
    stats.totalFiles++;
    stats.totalLines += lineCount;
    
    // Check frontmatter
    if (content.startsWith('---')) {
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        const frontmatter = content.substring(3, frontmatterEnd);
        
        // Check required fields
        const hasTitle = frontmatter.includes('title:');
        const hasDescription = frontmatter.includes('description:');
        const hasVersion = frontmatter.includes('version:');
        const hasLastUpdated = frontmatter.includes('lastUpdated:');
        const hasTags = frontmatter.includes('tags:');
        
        if (hasTitle && hasDescription && hasVersion && hasLastUpdated && hasTags) {
          stats.frontmatterStats.complete++;
        } else {
          stats.frontmatterStats.incomplete++;
        }
        
        // Count AI tags
        if (frontmatter.includes('#AI-First') || frontmatter.includes('ai-first')) {
          stats.aiTags['AI-First']++;
        }
        if (frontmatter.includes('#Auto-Generated')) {
          stats.aiTags['Auto-Generated']++;
        }
        if (frontmatter.includes('#Human-Written')) {
          stats.aiTags['Human-Written']++;
        }
        if (frontmatter.includes('#Prompt-Template')) {
          stats.aiTags['Prompt-Template']++;
        }
        if (frontmatter.includes('#Quick-Start')) {
          stats.aiTags['Quick-Start']++;
        }
      }
    } else {
      stats.frontmatterStats.missing++;
    }
    
    // Check for examples
    if (content.includes('```typescript') || content.includes('```javascript') || content.includes('```yaml')) {
      stats.filesWithExamples++;
    }
    
    // Check for diagrams
    if (content.includes('```mermaid') || content.includes('graph ') || content.includes('flowchart ')) {
      stats.filesWithDiagrams++;
    }
    
    return lineCount;
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error.message);
    return 0;
  }
}

/**
 * Process directory recursively
 */
function processDirectory(dir, categoryName = null) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip GENERATED and ARCHIVE
      if (!file.startsWith('.') && file !== 'GENERATED' && file !== 'ARCHIVE') {
        const subCategoryName = file;
        processDirectory(filePath, subCategoryName);
      }
    } else if (file.endsWith('.md')) {
      const lineCount = analyzeFile(filePath);
      
      if (categoryName) {
        if (!stats.categories[categoryName]) {
          stats.categories[categoryName] = { files: 0, lines: 0 };
        }
        stats.categories[categoryName].files++;
        stats.categories[categoryName].lines += lineCount;
      }
    }
  }
}

/**
 * Generate HTML report
 */
function generateHtmlReport() {
  const machineReadableRate = ((stats.frontmatterStats.complete / stats.totalFiles) * 100).toFixed(1);
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation Statistics</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
    }
    .container {
      background: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h1 { color: #333; border-bottom: 3px solid #007bff; padding-bottom: 10px; }
    h2 { color: #555; margin-top: 30px; }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    .stat-value { font-size: 2.5em; font-weight: bold; }
    .stat-label { font-size: 0.9em; opacity: 0.9; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th { background: #007bff; color: white; }
    tr:hover { background: #f5f5f5; }
    .progress-bar {
      background: #e0e0e0;
      border-radius: 4px;
      height: 20px;
      overflow: hidden;
    }
    .progress-fill {
      background: linear-gradient(90deg, #007bff, #0056b3);
      height: 100%;
      transition: width 0.3s;
    }
    .tag-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.85em;
      margin: 2px;
      color: white;
    }
    .tag-ai-First { background: #28a745; }
    .tag-Auto-Generated { background: #17a2b8; }
    .tag-Human-Written { background: #6c757d; }
    .tag-Prompt-Template { background: #fd7e14; }
    .tag-Quick-Start { background: #e83e8c; }
    footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      color: #666;
      font-size: 0.9em;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Documentation Statistics Report</h1>
    <p><strong>Generated:</strong> ${new Date().toISOString().split('T')[0]}</p>
    
    <h2>Overview</h2>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-value">${stats.totalFiles}</div>
        <div class="stat-label">Total Documents</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.totalLines.toLocaleString()}</div>
        <div class="stat-label">Total Lines</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${machineReadableRate}%</div>
        <div class="stat-label">Machine Readable</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.filesWithExamples}</div>
        <div class="stat-label">With Examples</div>
      </div>
    </div>
    
    <h2>Frontmatter Completeness</h2>
    <table>
      <tr>
        <th>Status</th>
        <th>Count</th>
        <th>Percentage</th>
        <th>Progress</th>
      </tr>
      <tr>
        <td>✅ Complete</td>
        <td>${stats.frontmatterStats.complete}</td>
        <td>${((stats.frontmatterStats.complete / stats.totalFiles) * 100).toFixed(1)}%</td>
        <td>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((stats.frontmatterStats.complete / stats.totalFiles) * 100).toFixed(1)}%"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td>⚠️ Incomplete</td>
        <td>${stats.frontmatterStats.incomplete}</td>
        <td>${((stats.frontmatterStats.incomplete / stats.totalFiles) * 100).toFixed(1)}%</td>
        <td>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((stats.frontmatterStats.incomplete / stats.totalFiles) * 100).toFixed(1)}%; background: #ffc107;"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td>❌ Missing</td>
        <td>${stats.frontmatterStats.missing}</td>
        <td>${((stats.frontmatterStats.missing / stats.totalFiles) * 100).toFixed(1)}%</td>
        <td>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((stats.frontmatterStats.missing / stats.totalFiles) * 100).toFixed(1)}%; background: #dc3545;"></div>
          </div>
        </td>
      </tr>
    </table>
    
    <h2>AI Tags Distribution</h2>
    <div>
      ${Object.entries(stats.aiTags).map(([tag, count]) => `
        <span class="tag-badge tag-${tag.replace('-', '')}">#${tag}</span> ${count}
      `).join('')}
    </div>
    
    <h2>Documents by Category</h2>
    <table>
      <tr>
        <th>Category</th>
        <th>Files</th>
        <th>Lines</th>
        <th>Avg Lines/File</th>
      </tr>
      ${Object.entries(stats.categories).map(([category, data]) => `
        <tr>
          <td><strong>${category}</strong></td>
          <td>${data.files}</td>
          <td>${data.lines.toLocaleString()}</td>
          <td>${Math.round(data.lines / data.files)}</td>
        </tr>
      `).join('')}
    </table>
    
    <h2>Content Quality</h2>
    <table>
      <tr>
        <th>Metric</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>📝 Files with Code Examples</td>
        <td>${stats.filesWithExamples} (${((stats.filesWithExamples / stats.totalFiles) * 100).toFixed(1)}%)</td>
      </tr>
      <tr>
        <td>📊 Files with Diagrams</td>
        <td>${stats.filesWithDiagrams} (${((stats.filesWithDiagrams / stats.totalFiles) * 100).toFixed(1)}%)</td>
      </tr>
      <tr>
        <td>📈 Average Lines per File</td>
        <td>${Math.round(stats.totalLines / stats.totalFiles)}</td>
      </tr>
    </table>
    
    <footer>
      <p>Generated by <code>docs:stats</code> script | TypeDom SVGs Documentation</p>
    </footer>
  </div>
</body>
</html>`;
  
  const outputPath = join(rootDir, 'GENERATED', 'reports', 'docs-statistics.html');
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ HTML report generated: ${outputPath}`);
}

// Main execution
processDirectory(aiDocsDir);

console.log('📊 Statistics Summary:');
console.log('='.repeat(60));
console.log(`Total Files: ${stats.totalFiles}`);
console.log(`Total Lines: ${stats.totalLines.toLocaleString()}`);
console.log(`Frontmatter Complete: ${stats.frontmatterStats.complete}`);
console.log(`Frontmatter Incomplete: ${stats.frontmatterStats.incomplete}`);
console.log(`Frontmatter Missing: ${stats.frontmatterStats.missing}`);
console.log('='.repeat(60));

// Generate HTML report
generateHtmlReport();

console.log('\n✅ Documentation statistics completed!');
