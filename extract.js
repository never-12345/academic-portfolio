async function fetchOrcid() {
  const res = await fetch('https://pub.orcid.org/v3.0/0000-0002-5795-787X/person', {
    headers: { 'Accept': 'application/json' }
  });
  const data = await res.json();
  
  const worksRes = await fetch('https://pub.orcid.org/v3.0/0000-0002-5795-787X/works', {
    headers: { 'Accept': 'application/json' }
  });
  const worksData = await worksRes.json();
  
  const empRes = await fetch('https://pub.orcid.org/v3.0/0000-0002-5795-787X/employments', {
    headers: { 'Accept': 'application/json' }
  });
  const empData = await empRes.json();

  const eduRes = await fetch('https://pub.orcid.org/v3.0/0000-0002-5795-787X/educations', {
    headers: { 'Accept': 'application/json' }
  });
  const eduData = await eduRes.json();

  const fs = await import('fs');
  fs.writeFileSync('orcid_output.json', JSON.stringify({
    person: data,
    worksCount: worksData.group ? worksData.group.length : 0,
    works: worksData.group ? worksData.group.map(g => g['work-summary'][0]) : [],
    employments: empData['affiliation-group'],
    educations: eduData['affiliation-group']
  }, null, 2));
}

fetchOrcid().catch(console.error);
