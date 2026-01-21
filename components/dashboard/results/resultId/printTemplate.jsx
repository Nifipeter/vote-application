export default function PrintTemplate({ poll }) {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="print-template">
      <style jsx>{`
        .print-template {
          display: none;
        }

        @media print {
          .print-template {
            display: block;
          }

          * {
            margin: 0;
            padding: 0;
          }

          body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            background: white;
            color: #000;
          }

          .print-header {
            text-align: center;
            border-bottom: 3px solid #000;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }

          .print-header h1 {
            font-size: 28pt;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .print-meta {
            font-size: 11pt;
            color: #333;
          }

          .print-content {
            margin-top: 30px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            page-break-inside: avoid;
            margin-bottom: 20px;
          }

          th {
            background: #f3f4f6;
            border: 1px solid #000;
            padding: 12px;
            text-align: left;
            font-weight: bold;
            font-size: 12pt;
          }

          td {
            border: 1px solid #ddd;
            padding: 10px 12px;
            font-size: 11pt;
          }

          tr:nth-child(even) {
            background: #f9fafb;
          }

          .position-section {
            page-break-inside: avoid;
            margin-bottom: 25px;
          }

          .position-title {
            font-size: 16pt;
            font-weight: bold;
            margin-bottom: 10px;
            border-left: 4px solid #000;
            padding-left: 10px;
          }

          .print-footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 10pt;
            text-align: center;
            color: #666;
          }

          .progress-bar {
            display: none;
          }

          .hidden-ui {
            display: none !important;
          }
        }
      `}</style>

      <div className="print-header">
        <h1>{poll.title || "Election Results"}</h1>
        <div className="print-meta">
          <p>Generated on {formattedDate}</p>
          <p>Results Report</p>
        </div>
      </div>

      <div className="print-content">
        {poll.contestants && poll.contestants.length > 0 ? (
          poll.contestants.map((position) => (
            <div key={position._id} className="position-section">
              <div className="position-title">{position.position}</div>
              <table>
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th style={{ width: "100px" }}>Votes</th>
                    <th style={{ width: "100px" }}>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {position.candidates && position.candidates.length > 0 ? (
                    position.candidates.map((candidate) => {
                      const totalVotes = position.candidates.reduce(
                        (sum, c) => sum + (c.votes || 0),
                        0,
                      );
                      const percentage =
                        totalVotes > 0
                          ? (
                              ((candidate.votes || 0) / totalVotes) *
                              100
                            ).toFixed(2)
                          : 0;

                      return (
                        <tr key={candidate._id}>
                          <td>{candidate.name}</td>
                          <td style={{ textAlign: "center" }}>
                            {candidate.votes || 0}
                          </td>
                          <td style={{ textAlign: "center" }}>{percentage}%</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="3" style={{ textAlign: "center" }}>
                        No candidates
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No position data available</p>
        )}
      </div>

      <div className="print-footer">
        <p>This is an official election results document.</p>
      </div>
    </div>
  );
}
